import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { FC } from 'react';
import { Radio, Space, Checkbox, Form } from 'antd';
import omit from 'lodash.omit';
import { DownOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';

import { City } from '~/types/Models';
import parseQuery from '~/utils/parseQuery';
import { Collapse } from '~/components/ui';
import ProductBadge from '../ProductBadge';

import styles from './ProductsFilters.module.css';

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
}

const ProductsFilters: FC<Props> = ({ cities }) => {
  const [form] = Form.useForm();
  const { query } = useRouter();

  const onSubmit = console.log;

  return (
    <Form
      className={styles.root}
      form={form}
      onFinish={onSubmit}
      onValuesChange={console.log}
      initialValues={{ CityId: 'all' }}
      id="productFilters"
    >
      <div>
        <span className="heading mx-4 py-6">Categorías</span>
        {/* TODO: obtener las categorías de strapi */}
        <ul className={styles.categories}>
          <li>
            <Link href={`/busqueda?${parseQuery(omit(query, 'category'))}`}>
              <a className={styles.categoryItem}>Todas las categorías</a>
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/busqueda?${parseQuery({
                  ...query,
                  categoria: category.categoriesId.join(','),
                })}`}
              >
                <a className={styles.categoryItem}>{category.name}</a>
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
        <Form.Item name="sale">
          <Checkbox.Group className="saleTypeCheckboxes">
            <Space direction="vertical" className="space-y-3">
              <Checkbox value="inStore">
                <span>
                  Venta en sucursal
                  <span className="block text-secondary">Culiacan y Navolato</span>
                </span>
                <ProductBadge type="shop" />
              </Checkbox>
              <Checkbox value="online">
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
      <button type="submit" className="hidden" />
    </Form>
  );
};

export default ProductsFilters;
