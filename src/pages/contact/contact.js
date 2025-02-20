import React, { useState } from "react";
import Layout from "../../component/Layout";
import Footer from "../../component/footer/footer";
import PageWrapper from "../../component/page-wrapper/page-wrapper";
import HeaderTitle from "../../component/page-header/header-title";
// import { db } from "../../config/firebaseConfig";
// import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uid = uuidv4();
    // await setDoc(doc(db, "user-data", uid), { ...formData, id: uid });
    console.log(uid, formData, "submitted");
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
        <HeaderTitle headerTitle="Contact." />
        <form onSubmit={handleSubmit}>
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
        </form>
        <Footer path="/">
          <p>Check it again</p>
        </Footer>
      </PageWrapper>
    </Layout>
  );
};

export default Contact;
