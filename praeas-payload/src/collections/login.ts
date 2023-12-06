import { CollectionConfig } from "payload/types";

const login: CollectionConfig = {
  slug: "login",
  auth: true,
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "username",
      type: "text",
      required: true,
    },
    {
        name: "password",
        type: "text",
        required: true,
    },
  ],
};

export default login;