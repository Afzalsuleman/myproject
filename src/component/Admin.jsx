import React, { useEffect, useState } from 'react';
import './Admin.scss'
import { Space, Table, Modal, Form, Input, Button } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons'
import { json } from 'react-router-dom';
import initialData from '../data';
function Admin() {
  const [form] = Form.useForm();
  const [data, setData] = useState(initialData);
  const [editRecord, setEditRecord] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleDelete = (key) => {
    const updatedData = data.filter(item => item.key !== key);
    setData([...updatedData]);
  };
  const handleEdit = async (record) => {
    
    await setEditRecord(record);
    await setIsModalVisible(true);
  };
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form values:", values); // Check if form values are correctly retrieved
        handleUpdate(values);
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };
  console.log("editRecord", editRecord)
  const handleUpdate = (D) => {
    const updatedData = data.map(item => {
      if (item.key === editRecord.key) {
        console.log("hit")
        setEditRecord({});
        return D;
      }
      return item;
    });
    console.log(updatedData)
    form.resetFields()
    setData([...updatedData]);
    
    setIsModalVisible(false);
    
  };
  const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
  
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: 'Edit',
      key: 'edit',
      fixed: 'right',
      width: 50,
      render: (_, record) => (
        <a onClick={() => handleEdit(record)}><EditTwoTone style={{ fontSize: '24px' }} /></a>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      fixed: 'right',
      width: 50,
      render: (_, record) => <a onClick={() => handleDelete(record.key)}>
        <DeleteTwoTone twoToneColor="red" style={{ fontSize: '24px' }} /></a>,
    },
  ];
  useEffect(() => {
    // Manually set form values when editRecord changes
    if (editRecord) {
      form.setFieldsValue(editRecord);
    } else {
      form.resetFields();
    }
  }, [editRecord, form]);
  return (
    <>
        <div className='comp1'>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          y: 300
        }}
      />
      
      <Modal
  title="Edit Record"
  visible={isModalVisible}
  onCancel={() => {
    setIsModalVisible(false);
    setEditRecord(null);
  }}
  footer={[
    <Button key="cancel" onClick={() => setIsModalVisible(false)}>
      Cancel
    </Button>,
    <Button key="submit" type="primary" onClick={handleOk}>
      Update
    </Button>,
  ]}
>
  <Form
    form={form}
    initialValues={editRecord} // Update initialValues prop with the current editRecord
    onFinish={handleOk}
  >
    <Form.Item label="Name" name="name">
      <Input />
    </Form.Item>
    <Form.Item label="Age" name="age">
      <Input />
    </Form.Item>
    <Form.Item label="Address" name="address">
      <Input />
    </Form.Item>
  </Form>
</Modal>
    </div>
    
    </>
    
    
  )
}

export default Admin