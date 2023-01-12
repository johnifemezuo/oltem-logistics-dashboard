import { ObjectShape, OptionalObjectSchema, TypeOfShape } from "yup/lib/object";
import { AnyObject } from "yup/lib/types";

export type ValidationSchema = OptionalObjectSchema<
  ObjectShape,
  AnyObject,
  TypeOfShape<ObjectShape>
>;
