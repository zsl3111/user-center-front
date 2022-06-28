import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const Admin: React.FC = (props) => {
  const {children} = props;
  return (
    // 将子组件嵌套进父组建
    <PageHeaderWrapper>
      {children}
    </PageHeaderWrapper>
  );
};

export default Admin;
