import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const DocumentPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    type: t.Union(
      [
        t.Literal("post"),
        t.Literal("invoice"),
        t.Literal("reminder"),
        t.Literal("document"),
      ],
      { additionalProperties: true },
    ),
    displayDate: t.Date({ additionalProperties: true }),
    header: t.String({ additionalProperties: true }),
    description: t.String({ additionalProperties: true }),
    invoiceValue: t.Number({ additionalProperties: true }),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
    vehicleId: t.String({ additionalProperties: true }),
    createdById: t.String({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const DocumentRelations = t.Object(
  {
    vehicle: t.Object(
      {
        id: t.String({ additionalProperties: true }),
        make: t.String({ additionalProperties: true }),
        model: t.String({ additionalProperties: true }),
        registrationNumber: t.String({ additionalProperties: true }),
        createdAt: t.Date({ additionalProperties: true }),
        updatedAt: t.Date({ additionalProperties: true }),
      },
      { additionalProperties: true },
    ),
    createdBy: t.Object(
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
    files: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          type: t.Union(
            [t.Literal("photo"), t.Literal("video"), t.Literal("document")],
            { additionalProperties: true },
          ),
          url: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
          documentId: __nullable__(t.String({ additionalProperties: true })),
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
    ),
  },
  { additionalProperties: true },
);

export const DocumentPlainInput = t.Object(
  {
    type: t.Union(
      [
        t.Literal("post"),
        t.Literal("invoice"),
        t.Literal("reminder"),
        t.Literal("document"),
      ],
      { additionalProperties: true },
    ),
    displayDate: t.Date({ additionalProperties: true }),
    header: t.String({ additionalProperties: true }),
    description: t.String({ additionalProperties: true }),
    invoiceValue: t.Number({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const DocumentRelationsInputCreate = t.Object(
  {
    vehicle: t.Object(
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
    createdBy: t.Object(
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
    files: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: true }),
              },
              { additionalProperties: true },
            ),
            { additionalProperties: true },
          ),
        },
        { additionalProperties: true },
      ),
    ),
  },
  { additionalProperties: true },
);

export const DocumentRelationsInputUpdate = t.Partial(
  t.Object(
    {
      vehicle: t.Object(
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
      createdBy: t.Object(
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
      files: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: true }),
                },
                { additionalProperties: true },
              ),
              { additionalProperties: true },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: true }),
                },
                { additionalProperties: true },
              ),
              { additionalProperties: true },
            ),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
    },
    { additionalProperties: true },
  ),
  { additionalProperties: true },
);

export const DocumentWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          type: t.Union(
            [
              t.Literal("post"),
              t.Literal("invoice"),
              t.Literal("reminder"),
              t.Literal("document"),
            ],
            { additionalProperties: true },
          ),
          displayDate: t.Date({ additionalProperties: true }),
          header: t.String({ additionalProperties: true }),
          description: t.String({ additionalProperties: true }),
          invoiceValue: t.Number({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
          vehicleId: t.String({ additionalProperties: true }),
          createdById: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "Document" },
  ),
  { additionalProperties: true },
);

export const DocumentWhereUnique = t.Recursive(
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
            type: t.Union(
              [
                t.Literal("post"),
                t.Literal("invoice"),
                t.Literal("reminder"),
                t.Literal("document"),
              ],
              { additionalProperties: true },
            ),
            displayDate: t.Date({ additionalProperties: true }),
            header: t.String({ additionalProperties: true }),
            description: t.String({ additionalProperties: true }),
            invoiceValue: t.Number({ additionalProperties: true }),
            createdAt: t.Date({ additionalProperties: true }),
            updatedAt: t.Date({ additionalProperties: true }),
            vehicleId: t.String({ additionalProperties: true }),
            createdById: t.String({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "Document" },
);

export const Document = t.Composite([DocumentPlain, DocumentRelations], {
  additionalProperties: true,
});

export const DocumentInputCreate = t.Composite(
  [DocumentPlainInput, DocumentRelationsInputCreate],
  { additionalProperties: true },
);

export const DocumentInputUpdate = t.Composite(
  [DocumentPlainInput, DocumentRelationsInputUpdate],
  { additionalProperties: true },
);
