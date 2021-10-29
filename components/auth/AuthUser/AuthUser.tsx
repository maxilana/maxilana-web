import cn from 'classnames';
import Link from 'next/link';
import { FC, useState } from 'react';
import { DownOutlined as ArrowDown } from '@ant-design/icons';

import { Dropdown } from '~/components/ui';

interface Props {
  username: string;
}

const AuthUser: FC<Props> = ({ username }) => {
  const [visible, toggleVisibility] = useState(false);

  return (
    <div className="relative">
      <Dropdown
        position="right"
        visible={visible}
        onClose={() => {
          toggleVisibility(false);
        }}
        parent={
          <div
            onClick={() => {
              toggleVisibility(!visible);
            }}
            className="flex items-center text-white text-sm hover:cursor-pointer"
          >
            <span className="flex items-center sm:space-x-2">
              <span className="line-clamp-1 inline-flex">{username}</span>
              <ArrowDown className={cn('transition-all', { ['transform rotate-180']: visible })} />
            </span>
          </div>
        }
      >
        <div role="menu" className="w-36">
          <Link href="/perfil">
            <a
              role="menuitem"
              className="block rounded-sm text-sm text-right p-1 hover:bg-brand/10"
            >
              Mi perfil
            </a>
          </Link>
          <a
            role="menuitem"
            className="block rounded-sm text-sm text-danger text-right p-1 hover:bg-brand/10"
          >
            Salir
          </a>
        </div>
      </Dropdown>
    </div>
  );
};

export default AuthUser;
