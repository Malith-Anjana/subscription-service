import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controllers.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", async (req, res) => {
  res.send({ title: "get All subscriptions" });
});
subscriptionRouter.get("/:id", async (req, res) => {
  res.send({ title: "get subscription details" });
});
subscriptionRouter.post("/", authenticate, createSubscription);
subscriptionRouter.put("/:id", async (req, res) => {
  res.send({ title: "get All subscriptions" });
});
subscriptionRouter.delete("/:id", async (req, res) => {
  res.send({ title: "delete subscription" });
});
subscriptionRouter.get("/user/:id", authenticate, getUserSubscriptions);

subscriptionRouter.put("/user/:id", async (req, res) => {
  res.send({ title: "get All subscriptions" });
});
subscriptionRouter.put("/:id/cancel", async (req, res) => {
  res.send({ title: "cancel subscriptions" });
});
subscriptionRouter.get("/upcomming-renewals", async (req, res) => {
  res.send({ title: "get upcomming renewals" });
});

export default subscriptionRouter;
