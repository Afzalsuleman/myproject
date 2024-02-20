import React from 'react'
import './Ai.scss'
import { Button, Form, Input, Space } from 'antd';
const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};
function Ai() {
  const [form] = Form.useForm();
  return (
    <div className='comp'>
      Ai
    </div>
  )
}

export default Ai