import { Card } from "antd";

const AntdCard = ({ children, title, style }) => {
  return (
    <Card title={title} style={style}>
      {children}
    </Card>
  );
};

export default AntdCard;
