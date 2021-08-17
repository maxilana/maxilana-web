import Image from 'next/image';
import { NextPage } from "next";
import React, { useState } from 'react';
import { WhatsAppOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';

import { Button } from '~/components/ui';
import { Hero } from "~/components/common";
import Dropdown from '~/components/ui/Dropdown';
import { Layout, Navbar } from "~/components/layout";

const whatsappList = [
  { label: "Culiacán y Navolato" },
  { label: "Mazatlán" },
  { label: "Guadalajara" },
  { label: "Hermosillo" },
  { label: "Mexicali" },
  { label: "Tijuana" }
];

const ButtonDropdown = ({ list }: { list: { label: string }[] }) => {
  const [visible, toggleDropdown] = useState(false);

  return (
    <Dropdown
      visible={visible}
      onClose={() => { toggleDropdown(false) }}
      parent={(
        <Button
          theme="danger"
          text="Conviértete en distribuidora"
          onClick={() => { toggleDropdown(!visible) }}
          icon={<WhatsAppOutlined style={{ fontSize: 20 }} />}
          rightIcon={
            visible
              ? <UpOutlined style={{ fontSize: 20 }} />
              : <DownOutlined style={{ fontSize: 20 }} />
          }
        />
      )}
    >
      <div role="list">
        {list.map(item => (
          <span
            key={item.label}
            role="listitem"
            className="block p-1 text-xs text-primary"
          >
            {item.label}
          </span>
        ))}
      </div>
    </Dropdown>
  )
}

const ValesPage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Invierte tu tiempo y gana dinero extra"
        subtitle="Conviértete en distribuidora de vales y empieza a cumplir tus metas"
        cover={(
          <Image
            layout="fill"
            src="/demo-hero-vales.jpg"
            alt="Mujer hablando por teléfono, consiguiendo clientes"
            objectFit="cover"
          />
        )}
        actions={(
          <ButtonDropdown list={whatsappList} />
        )}
      />
      <Layout>
        <h1>Hey!</h1>
      </Layout>
    </div>
  )
}

export default ValesPage;
