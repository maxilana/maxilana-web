import Link from 'next/link';
import { Tabs } from 'antd';
import { NextPage } from 'next';
import { UserOutlined, EditOutlined, FileTextOutlined, ProfileOutlined } from '@ant-design/icons';

import { Modal } from '~/components/common';
import { Layout } from '~/components/layout';
import { DefaultPageProps } from '~/types/DefaultPageProps';
import { PawnList, PawnProfileForm } from '~/components/profile';
import useToggleState from '~/hooks/useToggleState';

const { TabPane } = Tabs;

const ProfilePage: NextPage<DefaultPageProps> = ({ cities, legalPages }) => {
  const [showModal, toggleModal] = useToggleState(false);

  return (
    <Layout
      cities={cities}
      legalPages={legalPages}
      title="Perfil de usuario"
      meta={{ css: ['/antd/tabs.css', '/antd/form.css'] }}
    >
      <section className="max-w-2xl mx-auto py-4 sm:px-4 sm:py-8">
        <header className="flex items-center mb-6 px-4 sm:px-0">
          <span className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full border-gray-300 border">
            <UserOutlined style={{ fontSize: 32 }} />
          </span>
          <div className="space-y-2 ml-4 flex-1">
            <span className="block font-semibold">Mariana Denisse Aguerrebere Tellaeche</span>
            <span className="block text-secondary text-sm">ezerangel@live.com</span>
            <span className="p-1 rounded-sm bg-surface-dark text-xs">Público general</span>
          </div>
          <div>
            <Link href="/perfil/editar-perfil">
              <a>
                <EditOutlined style={{ fontSize: 24 }} />
              </a>
            </Link>
          </div>
        </header>
        <div className="relative bg-white border border-surface-dark sm:rounded-sm">
          <Tabs defaultActiveKey="boletas">
            <TabPane
              key="boletas"
              tab={
                <span className="flex items-center px-2">
                  <FileTextOutlined style={{ fontSize: 14 }} />
                  Boletas
                </span>
              }
            >
              <PawnList
                onAddAccount={() => {
                  toggleModal();
                }}
              />
            </TabPane>
            <TabPane
              key="compras"
              tab={
                <span className="flex items-center px-2">
                  <ProfileOutlined style={{ fontSize: 14 }} />
                  Compras
                </span>
              }
            >
              Tab 2
            </TabPane>
          </Tabs>
        </div>
      </section>
      <Modal open={showModal} onClose={() => toggleModal()}>
        <PawnProfileForm
          onSubmit={async (data) => {
            console.log(data);
          }}
        />
      </Modal>
    </Layout>
  );
};

export default ProfilePage;
