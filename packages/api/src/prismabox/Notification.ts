import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const NotificationPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    title: t.String({ additionalProperties: true }),
    message: t.String({ additionalProperties: true }),
    userId: t.String({ additionalProperties: true }),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const NotificationRelations = t.Object(
  {
    user: t.Object(
      {
        id: t.String({ additionalProperties: true }),
        role: t.Union([t.Literal("admin"), t.Literal("user")], {
          additionalProperties: true,
        }),
        firstName: __nullable__(t.String({ additionalProperties: true })),
        lastName: __nullable__(t.String({ additionalProperties: true })),
        email: t.String({ additionalProperties: true }),
        profilePicture: __nullable__(t.String({ additionalProperties: true })),
        location: __nullable__(t.String({ additionalProperties: true })),
        createdAt: t.Date({ additionalProperties: true }),
        updatedAt: t.Date({ additionalProperties: true }),
      },
      { additionalProperties: true },
    ),
  },
  { additionalProperties: true },
);

export const NotificationPlainInput = t.Object(
  {
    title: t.String({ additionalProperties: true }),
    message: t.String({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const NotificationRelationsInputCreate = t.Object(
  {
    user: t.Object(
      {
        connect: t.Object(
          {
            id: t.String({ additionalProperties: true }),
          },
          { additionalProperties: true },
        ),
      },
      { additionalProperties: true },
    ),
  },
  { additionalProperties: true },
);

export const NotificationRelationsInputUpdate = t.Partial(
  t.Object(
    {
      user: t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: true }),
            },
            { additionalProperties: true },
          ),
        },
        { additionalProperties: true },
      ),
    },
    { additionalProperties: true },
  ),
  { additionalProperties: true },
);

export const NotificationWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          title: t.String({ additionalProperties: true }),
          message: t.String({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "Notification" },
  ),
  { additionalProperties: true },
);

export const NotificationWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String({ additionalProperties: true }) },
            { additionalProperties: true },
          ),
          { additionalProperties: true },
        ),
        t.Union([t.Object({ id: t.String({ additionalProperties: true }) })], {
          additionalProperties: true,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
            NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
            OR: t.Array(Self, { additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
        t.Partial(
          t.Object({
            title: t.String({ additionalProperties: true }),
            message: t.String({ additionalProperties: true }),
            userId: t.String({ additionalProperties: true }),
            createdAt: t.Date({ additionalProperties: true }),
            updatedAt: t.Date({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "Notification" },
);

export const Notification = t.Composite(
  [NotificationPlain, NotificationRelations],
  { additionalProperties: true },
);

export const NotificationInputCreate = t.Composite(
  [NotificationPlainInput, NotificationRelationsInputCreate],
  { additionalProperties: true },
);

export const NotificationInputUpdate = t.Composite(
  [NotificationPlainInput, NotificationRelationsInputUpdate],
  { additionalProperties: true },
);
