import { messageInRaw, Webhook } from "svix";

// API Controller function to manage clerk user with database
// http://localhost:4000/api/user/webhooks

const clerkWebHooks = async (req, res) => {
  try {
    // create a svix instance with clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const {data,type}=req.body;
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
