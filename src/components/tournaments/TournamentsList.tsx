import { List, Space } from "antd";
import React from "react";
import { AppleOutlined } from '@ant-design/icons';
import { useGetTournaments } from "../../api/tournaments";

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `Tournament part ${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function TournamentsList() {
  const { data: tournaments, isPending, isSuccess } = useGetTournaments();

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={tournaments}
      renderItem={(item) => (
        <List.Item
          key={item.name}
          actions={[
            <IconText icon={AppleOutlined} text="156" key="list-vertical-star-o" />,
            <IconText icon={AppleOutlined} text="156" key="list-vertical-like-o" />,
            <IconText icon={AppleOutlined} text="2" key="list-vertical-message" />,
          ]}
        >
          <List.Item.Meta
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  )
}