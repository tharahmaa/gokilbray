import { CollectionConfig } from "payload/types";

const chat: CollectionConfig = {
  slug: "chat",
  auth: true,
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "Username",
      type: "text",
      label: "Username",
      required: true,
    },
    {
      name: "Pesan",
      type: "textarea",
      label: "Pesan",
      required: true,
    },
  ],
};

export default chat;
