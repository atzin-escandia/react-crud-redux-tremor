import { Button, Card, TextInput, Title } from "@tremor/react";
import { addNewUser } from "../store/users/slice";
import { useUserActions } from "../hooks/useUserActions";
import React from "react";

const CreateNewUser = () => {
  const { addNewUser } = useUserActions();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event?.target;
    const formaData = new FormData(form);
    formData;
    const name = formData.get("name") as string;
    const email = formData.get("name") as string;
    const github = formData.get("name") as string;

    addNewUser(name, email, github);
  };

  return (
    <Card style={{ marginTop: "20px" }}>
      <Title>Create New User</Title>
      <form onSubmit={handleSubmit} action="">
        <TextInput name="name" placeholder="Name" />
        <TextInput name="email" placeholder="Email" />
        <TextInput name="github" placeholder="Github user" />
        <div>
          <Button type="submit" style={{ marginTop: "20px" }}>
            Create user
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CreateNewUser;
