import { Form, Input, Button, Card } from "antd";

function Signup() {
  const onFinish = async (values) => {
    try {
      console.log(values);
      let res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(res.json());
      // show notification with the success message
      // redirect to the dashboard page
    } catch (error) {
      console.log(error);
      // show notification with the error message
    }
  };

  let onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f0f2f5",
      }}
    >
      <Card
        title="KAM Lead Manager | Sign Up"
        style={{
          width: "100%",
          maxWidth: 400,
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
        styles={{
          header: { textAlign: "center", fontSize: "24px", fontWeight: "bold" },
        }}
      >
        <Form
          name="signup"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Signup;
