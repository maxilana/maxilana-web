import cn from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import React, { FC, useEffect, useState } from 'react';
import { Radio, Space, Checkbox, Form, FormProps } from 'antd';
import omit from 'lodash.omit';
import intersection from 'lodash/intersection';

import { Branch, City } from '~/types/Models';
import parseQuery from '~/utils/parseQuery';
import { Collapse } from '~/components/ui';
import ProductBadge from '../ProductBadge';

import styles from './ProductsFilters.module.css';
import { InputField } from '~/components/common';

const categories = [
  {
    id: 1,
    name: 'Joyería',
    categoriesId: [1, 3, 4],
  },
  {
    id: 2,
    name: 'Relojes',
    categoriesId: [1, 3, 4],
  },
  {
    id: 3,
    name: 'Computadoras',
    categoriesId: [1, 3, 4],
  },
  {
    id: 4,
    name: 'Herramientas',
    categoriesId: [1, 3, 4],
  },
  {
    id: 5,
    name: 'Instrumentos musicales',
    categoriesId: [1, 3, 4],
  },
  {
    id: 6,
    name: 'Automobiles',
    categoriesId: [1, 3, 4],
  },
  {
    id: 7,
    name: 'Celulares',
    categoriesId: [1, 3, 4],
  },
  {
    id: 8,
    name: 'Electrodomésticos',
    categoriesId: [1, 3, 4],
  },
  {
    id: 9,
    name: 'Videojuegos',
    categoriesId: [1, 3, 4],
  },
];

interface Props {
  cities?: City[];
  branches?: Branch[] | null;
}

const ProductsFilters: FC<Props> = ({ cities, branches }) => {
  const [form] = Form.useForm();
  const [branchFilter, setBranchFilter] = useState('');
  const { query, push } = useRouter();
  const [category, setCategory] = useState<
    { id: number; name: string; categoriesId: number[] } | undefined | null
  >(null);

  const goToSearch = (queryParams: ParsedUrlQuery) => {
    push(`/busqueda?${parseQuery(omit(queryParams, 'page'))}`);
  };

  const { categoria, ciudad, sucursal, vtalinea } = query;

  useEffect(() => {
    if (typeof categoria === 'string') {
      const categoriesIds = categoria.split(',').map((item) => parseInt(item));
      setCategory(categories.find((item) => intersection(item.categoriesId, categoriesIds).length));
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

  const handleChange: FormProps['onValuesChange'] = (changes) => {
    const { CityId, saleOnline, BranchId } = changes;
    if (CityId) {
      if (CityId === 'all') {
        goToSearch(omit(query, 'ciudad', 'sucursal'));
      } else {
        goToSearch(omit({ ...query, ciudad: CityId }, 'sucursal'));
      }
    }
    if (BranchId) {
      if (BranchId === 'all') {
        goToSearch(omit(query, 'sucursal'));
      } else {
        goToSearch({ ...query, sucursal: BranchId });
      }
    }
    if (saleOnline) {
      if (saleOnline.includes('0') && saleOnline.includes('1')) {
        goToSearch(omit(query, 'vtalinea'));
      } else {
        goToSearch({ ...query, vtalinea: saleOnline });
      }
    }
  };

  return (
    <Form
      className={styles.root}
      form={form}
      onValuesChange={handleChange}
      initialValues={{
        CityId: ciudad ? parseInt(ciudad as string) : 'all',
        saleOnline: vtalinea ? [vtalinea] : ['0', '1'],
        BranchId: sucursal ? parseInt(sucursal as string) : 'all',
      }}
      id="productFilters"
    >
      <div>
        <span className="heading mx-4 py-6">Categorías</span>
        {/* TODO: obtener las categorías de strapi */}
        <ul className={styles.categories}>
          <li>
            <Link href={`/busqueda?${parseQuery(omit(query, 'categoria'))}`}>
              <a className={cn(styles.categoryItem, { [styles.categorySelected]: !category })}>
                Todas las categorías
              </a>
            </Link>
          </li>
          {categories.map((item) => (
            <li key={item.id}>
              <Link
                href={`/busqueda?${parseQuery({
                  ...query,
                  categoria: item.categoriesId.join(','),
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
        <div className="flex justify-between items-center mb-6">
          <span className="h6">Filtros</span>
          <Link href="/busqueda">
            <a className="uppercase text-price text-xs">Borrar filtros</a>
          </Link>
        </div>
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
                  <span className="block text-secondary">Culiacan y Navolato</span>
                </span>
                <ProductBadge type="shop" />
              </Checkbox>
              <Checkbox value="1" disabled={vtalinea === '1'}>
                <span>
                  Venta en línea
                  <span className="block text-secondary">Envíos a todo méxico</span>
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
            <Form.Item name="BranchId" className="max-h-[400px] overflow-y-auto">
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
      <button type="submit" className="hidden" />
    </Form>
  );
};

export default ProductsFilters;
