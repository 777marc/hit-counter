#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { HitCounterStack } from "../lib/hit-counter-stack";

const app = new cdk.App();
new HitCounterStack(app, "HitCounterStack", {
  env: { account: "388414971737", region: "us-east-1" },
});
