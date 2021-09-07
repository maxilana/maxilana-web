import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import cn from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Radio, Space, Checkbox, Form, FormProps } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import omit from 'lodash.omit';
import intersection from 'lodash/intersection';
import ClickOutside from '~/modules/lib/click-outside';

import { Branch, City } from '~/types/Models';
import { CMSCategory } from '~/types/Models/CMSCategory';
import parseQuery from '~/utils/parseQuery';
import { Collapse } from '~/components/ui';
import { PriceRangeInput } from '~/components/products';
import ProductBadge from '../ProductBadge';

import styles from './ProductsFilters.module.css';
import { InputField } from '~/components/common';

interface Props {
  cities?: City[];
  branches?: Branch[] | null;
  visible?: boolean;
  onClose?: () => void;
  onFiltersChange: (filters: ParsedUrlQuery) => void;
  categories: Array<Partial<CMSCategory>>;
}

const ProductsFilters: FC<Props> = ({
  categories,
  cities,
  branches,
  visible,
  onClose,
  onFiltersChange,
}) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [form] = Form.useForm();
  const [branchFilter, setBranchFilter] = useState('');
  const { query } = useRouter();
  const [category, setCategory] = useState<Partial<CMSCategory> | null | undefined>(null);

  const { categoria, ciudad, sucursal, vtalinea, min, max, orden } = query;

  useEffect(() => {
    if (ref.current) {
      if (visible) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [visible]);

  useEffect(() => {
    if (typeof categoria === 'string') {
      setCategory(categories?.find?.((item) => item?.id === parseInt(categoria)));
    }
  }, [categoria]);

  useEffect(() => {
    if (typeof ciudad === 'string') {
      form.setFieldsValue({ CityId: parseInt(ciudad) });
    }
  }, [ciudad]);

  useEffect(() => {
    if (typeof sucursal === 'string') {
      form.setFieldsValue({ BranchId: parseInt(sucursal) });
    }
  }, [sucursal]);

  useEffect(() => {
    if (vtalinea) {
      form.setFieldsValue({ saleOnline: [vtalinea] });
    }
  }, [vtalinea]);

  useEffect(() => {
    console.log({ min, max }, '...');
    form.setFieldsValue({ priceRange: { min, max } });
  }, [min, max]);

  const handleChange: FormProps['onValuesChange'] = (changes) => {
    const { CityId, saleOnline, BranchId, priceRange, order } = changes;
    if (CityId) {
      if (CityId === 'all') {
        return onFiltersChange(omit(query, 'ciudad', 'sucursal'));
      } else {
        return onFiltersChange(omit({ ...query, ciudad: CityId }, 'sucursal'));
      }
    }
    if (BranchId) {
      if (BranchId === 'all') {
        return onFiltersChange(omit(query, 'sucursal'));
      } else {
        return onFiltersChange({ ...query, sucursal: BranchId });
      }
    }
    if (saleOnline) {
      if (saleOnline.includes('0') && saleOnline.includes('1')) {
        return onFiltersChange(omit(query, 'vtalinea'));
      } else {
        return onFiltersChange({ ...query, vtalinea: saleOnline });
      }
    }
    if (priceRange?.max) {
      return onFiltersChange({ ...query, min: priceRange?.min || '0', max: priceRange?.max });
    } else if (priceRange?.min) {
      return onFiltersChange(omit({ ...query, min: priceRange?.min }, 'max'));
    } else if (query?.min) {
      return onFiltersChange(omit(query, 'min', 'max'));
    }

    if (order) {
      return onFiltersChange({ ...query, orden: order });
    }
  };

  return (
    <Form
      className={cn(styles.root, { [styles.visible]: visible })}
      form={form}
      onValuesChange={handleChange}
      initialValues={{
        CityId: ciudad ? parseInt(ciudad as string) : 'all',
        saleOnline: vtalinea ? [vtalinea] : ['0', '1'],
        BranchId: sucursal ? parseInt(sucursal as string) : 'all',
        priceRange: { min: min || '', max: max || '' },
        order: orden || 'desc',
      }}
      id="productFilters"
    >
      <ClickOutside active={!!visible} onClick={() => onClose?.()}>
        <div className="flex-1 flex flex-col">
          <div className={styles.titleBar}>
            <span className="h6">Filtros</span>
            <CloseOutlined onClick={onClose} className="text-secondary lg:hidden" />
            <Link href="/busqueda">
              <a className="uppercase text-price text-xs hidden lg:inline-block">Borrar filtros</a>
            </Link>
          </div>
          <div className={styles.scroll} ref={ref}>
            <div>
              <span className="heading mx-4 py-6">Categorías</span>
              {/* TODO: obtener las categorías de strapi */}
              <ul className={styles.categories}>
                <li>
                  <Link href={`/busqueda?${parseQuery(omit(query, 'categoria'))}`}>
                    <a
                      className={cn(styles.categoryItem, { [styles.categorySelected]: !category })}
                    >
                      Todas las categorías
                    </a>
                  </Link>
                </li>
                {categories.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/busqueda?${parseQuery({
                        ...query,
                        categoria: `${item?.id}`,
                      })}`}
                    >
                      <a
                        className={cn(styles.categoryItem, {
                          [styles.categorySelected]: item.id === category?.id,
                        })}
                      >
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 pb-0">
              <Collapse title="Ubicación">
                <Form.Item name="CityId">
                  <Radio.Group>
                    <div className="flex flex-col gap-4">
                      <Radio value="all" className="block">
                        Todas
                      </Radio>
                      {!!cities &&
                        cities.map((city) => (
                          <Radio value={city.id} key={city.id} className="block">
                            {city.name}
                          </Radio>
                        ))}
                    </div>
                  </Radio.Group>
                </Form.Item>
              </Collapse>
            </div>
            <div className="p-4">
              <Form.Item name="saleOnline">
                <Checkbox.Group className="saleTypeCheckboxes">
                  <Space direction="vertical" className="space-y-3">
                    <Checkbox value="0" disabled={vtalinea === '0'}>
                      <span>
                        Venta en sucursal
                        <span className="block text-secondary line-clamp-1">
                          Culiacan y Navolato
                        </span>
                      </span>
                      <ProductBadge type="shop" />
                    </Checkbox>
                    <Checkbox value="1" disabled={vtalinea === '1'}>
                      <span>
                        Venta en línea
                        <span className="block text-secondary line-clamp-1">
                          Envíos a todo méxico
                        </span>
                      </span>
                      <ProductBadge type="car" />
                    </Checkbox>
                  </Space>
                </Checkbox.Group>
              </Form.Item>
            </div>
            {!!branches?.length && (
              <div className="p-4">
                <Collapse title="Sucursales">
                  <InputField
                    name="searchBranch"
                    value={branchFilter}
                    onChange={(e) => setBranchFilter(e.target.value)}
                    placeholder="Buscar sucursal"
                    className="w-full rounded-sm border px-4 py-2"
                  />
                  <Form.Item name="BranchId" className="md:max-h-[400px] md:overflow-y-auto">
                    <Radio.Group>
                      <div className="flex flex-col gap-4">
                        <Radio value="all" className="block">
                          Todas
                        </Radio>
                        {(branchFilter
                          ? branches.filter((item) =>
                              item.name.toLowerCase().includes(branchFilter.toLowerCase()),
                            )
                          : branches
                        ).map((branch) => (
                          <Radio value={branch.id} key={branch.id} className="block">
                            {branch.name}
                          </Radio>
                        ))}
                      </div>
                    </Radio.Group>
                  </Form.Item>
                </Collapse>
              </div>
            )}
            <div className="p-4">
              <Collapse title="Rango de precios">
                <Form.Item name="priceRange">
                  <PriceRangeInput />
                </Form.Item>
                <span className="heading mt-6">Ordenar</span>
                <Form.Item name="order">
                  <Radio.Group>
                    <div className="flex flex-col">
                      <Radio value="desc" className="line-clamp-1">
                        <span title="Precio mas alto primero">Precio mas alto primero</span>
                      </Radio>
                      <Radio value="asc" className="line-clamp-1">
                        <span title="Precio mas bajo primero">Precio mas bajo primero</span>
                      </Radio>
                    </div>
                  </Radio.Group>
                </Form.Item>
              </Collapse>
            </div>
          </div>
          <button type="submit" className="hidden" />
        </div>
      </ClickOutside>
    </Form>
  );
};

export default ProductsFilters;
