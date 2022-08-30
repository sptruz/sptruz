import Link from 'next/link';
import { FC } from 'react';
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SubMenu,
} from 'react-pro-sidebar';

import pkg from '../../../package.json';
import SidebarBg from '@/assets/img/bg2.jpg';
import DeviconsReactOriginal from 'devicons-react/lib/icons/DeviconsReactOriginal';
import GithubOriginal from 'devicons-react/lib/icons/GithubOriginal';
import { APIIcon, PackageIcon, CodeIcon } from '@/icons/index';

type Props = {
  collapsed?: boolean;
  toggled?: boolean;
  handleToggleSidebar?: any;
};

const Nav: FC<Props> = (props) => {
  const { collapsed, toggled, handleToggleSidebar } = props;

  const getYear = () => {
    return new Date().getFullYear().toString();
  };

  return (
    <ProSidebar
      image={SidebarBg.src}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <Link href="/">
          <a>
            <h1 className="nav__title">
              <div className="nav__banner">
                <DeviconsReactOriginal size={'3rem'} />
              </div>
              Sptruz
            </h1>
          </a>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<DeviconsReactOriginal size={'24'} />}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <MenuItem icon={<PackageIcon />}>
            <Link href="/installation">
              <a>Installation</a>
            </Link>
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu icon={<APIIcon />} title={'API'}>
            <MenuItem>
              <Link href="/sptruz">
                <a>Sptruz</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/parse">
                <a>Parse</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/mix">
                <a>Mix</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/convert">
                <a>Convert</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/colors-names">
                <a>Colors Names</a>
              </Link>
            </MenuItem>
          </SubMenu>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu icon={<CodeIcon />} title={'Demo'}>
            <MenuItem>
              <Link href="/sptruz/demo">
                <a>Sptruz</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/parse/demo">
                <a>Parse</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/mix/demo">
                <a>Mix</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/convert/demo">
                <a>Convert</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/colors-names/demo">
                <a>Colors Names</a>
              </Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className={''}
          style={{
            padding: '10px 14px',
          }}
        >
          <div
            className={'sidebar-btn-wrapper'}
            style={{
              padding: '5px',
            }}
          >
            <a
              href={`https://github.com/MKAbuMattar/sptruz/releases/tag/${pkg.version}`}
              target="__blank"
              className={'sidebar-btn'}
              rel="noopener noreferrer"
            >
              <span
                style={{
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                }}
              >
                Version: {pkg.version}
              </span>
            </a>
          </div>

          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '5px',
            }}
          >
            <a
              href="https://github.com/MKAbuMattar/sptruz"
              target="__blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <span>
                <GithubOriginal className={'icons__github'} />
              </span>
              <span
                style={{
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                }}
              >
                View Source
              </span>
            </a>
          </div>

          <div
            className={''}
            style={{
              padding: '5px',
            }}
          >
            {getYear() > '2022' ? `2022 - ${getYear()}` : getYear()}
          </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Nav;
