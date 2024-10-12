import React, { useState } from "react";
import Layout from "../../component/Layout";
import Footer from "../../component/footer/footer";
import PageWrapper from "../../component/page-wrapper/page-wrapper";
import HeaderTitle from "../../component/page-header/header-title";

const Contact = () => {
  const headerTags = {
    title: "Contact | Chaitanya Pattem",
    keywords: "Contact",
    titleTemplate: "Contact | Chaitanya Pattem",
    description: "Contact of this porfolio of chaitanya's website",
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const uid = uuidv4();
    // setOpen(true);
    // setName(formData.name);
    // await setDoc(doc(firestore, "user-data", uid), { ...formData, id: uid });
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const isFormFilled = formData.name && formData.email && formData.message;

  return (
    <Layout headerTags={headerTags}>
      <PageWrapper>
        <div
          id="contact"
          style={{
            paddingBlock: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <HeaderTitle headerTitle="Contact." />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: "10px",
              flexDirection: "column",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                onChange={handleChange}
              />
              <textarea
                name="message"
                value={formData.message}
                placeholder="Your Message"
                multiline={4}
                onChange={handleChange}
              />
              <input
                type="submit"
                name="Send Message"
                disabled={isFormFilled ? false : true}
              />
              {/* Send Message
              </input> */}
            </form>
            {/* <p style={{ textAlign: "center", paddingTop: 6 }}>
                <p>
                  If you have any questions or would like to collaborate, please
                  don't hesitate to contact me
                  <br />
                  {linksContent.map((item) => (
                    <IconButton fontSize="large" key={item.id} href={item.link}>
                      {item.icon}
                    </IconButton>
                  ))}
                  <p
                    style={{
                      color: "secondary",
                      // fontSize: { xs: "12px", md: "12px", lg: "16px" },
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    All Rights Reserved © {new Date().getFullYear()} Chaitanya
                    Pattem
                  </p>
                </p>
              </p> */}
          </div>
        </div>
      </PageWrapper>
      <Footer path="/">
        <p>Continue to Home</p>
      </Footer>
    </Layout>
  );
};

export default Contact;
