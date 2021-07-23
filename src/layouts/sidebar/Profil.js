import React, { useState } from 'react';
import { Avatar, Badge } from 'antd';
import { FiUser } from 'react-icons/fi';

export default function Profil() {
  const [count, setcount] = useState(1);
  return (
    <div
      className="app-sidebar-profil-content"
      onClick={() => {
        setcount(count + 1);
      }}>
      <span className="avatar-item">
        <Badge size='small' count={count}>
          <Avatar shape="square" icon={<FiUser />} />
        </Badge>
      </span>
    </div>
  );
}
