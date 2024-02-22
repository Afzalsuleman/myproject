import React, { useState } from 'react'
import './Ai.scss'
import { Space, Table, Modal, Form, Input, Button,message } from 'antd';
import initialData from '../data';
import { PlusCircleFilled } from '@ant-design/icons'
function Ai() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();
  const handleClick=()=>{
    setIsModalVisible(true);
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
  const handleUpdate = (values) => {
    const newRecord = {
      key: initialData.length + 1, // Generate a unique key for the new record
      ...values,
    };
    initialData.push(newRecord);
    setIsModalVisible(false);
  }
  return (
    <div className='comp'>
      <PlusCircleFilled style={{ fontSize: '24px' }} onClick={handleClick}/>
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
    initialValues={""} // Update initialValues prop with the current editRecord
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
  )
}

export default Ai