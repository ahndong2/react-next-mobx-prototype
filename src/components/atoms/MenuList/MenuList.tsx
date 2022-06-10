import React, { useEffect, useState, useRef } from 'react';
import { MenuItem, MenuItemProps } from '@/components';
import styles from './MenuList.module.scss';

export interface MenuListProps {
  children?: React.ReactNode;
  id?: string;
  onChange?: (menuItem: MenuItemProps) => void;
}
const defaultProps: MenuListProps = {
  onChange: () => {},
};
const MenuList = (props: MenuListProps) => {
  const { children, id, onChange } = props;
  const [data, setData] = useState({
    selectMenuItem: {
      label: '',
      value: '',
    } as MenuItemProps,
    display: false,
  });

  const componentRef = useRef(null);

  const changeMenu = (changeMenuItem) => {
    setData({
      selectMenuItem: changeMenuItem,
      display: false,
    });
  };

  const changeDisplay = () => {
    setData({ ...data, display: !data.display });
  };

  useEffect(() => {
    onChange(data.selectMenuItem);
  }, [data.selectMenuItem]);

  useEffect(() => {
    const onClickEvent = (e) => {
      const { target } = e;
      if (!target.closest(`.${componentRef.current.className}`)) {
        changeDisplay();
        return;
      }
    };

    if (data.display) {
      window.addEventListener('click', onClickEvent);
    }

    return () => {
      // 해제
      window.removeEventListener('click', onClickEvent);
    };
  }, [data.display]);

  return (
    <div className={styles.root} ref={componentRef}>
      <div className={styles.input} onClick={changeDisplay}>
        {data.selectMenuItem.label}
      </div>
      <ul className={data.display ? styles.show : styles.hide}>
        {/* children map 바로 돌리면 Type Error */}
        {React.Children.map(children, (v, i: number) => {
          const { props } = v as React.ReactElement;
          return <MenuItem key={`select_${id}_${i}`} {...props} onClick={changeMenu} />;
        })}
      </ul>
    </div>
  );
};
MenuList.defaultProps = defaultProps;
export { MenuList };
