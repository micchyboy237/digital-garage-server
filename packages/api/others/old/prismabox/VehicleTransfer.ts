import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const VehicleTransferPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    vehicleId: t.String({ additionalProperties: true }),
    senderId: t.String({ additionalProperties: true }),
    recipientId: t.String({ additionalProperties: true }),
    status: t.Union(
      [t.Literal("REQUESTED"), t.Literal("ACCEPTED"), t.Literal("REJECTED")],
      { additionalProperties: true },
    ),
    transferDate: t.Date({ additionalProperties: true }),
    responseDate: __nullable__(t.Date({ additionalProperties: true })),
    reason: __nullable__(t.String({ additionalProperties: true })),
    excludedMediaFileTypes: t.Array(
      t.Union([t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")], {
        additionalProperties: true,
      }),
    ),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleTransferRelations = t.Object(
  {
    vehicle: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          make: t.String({ additionalProperties: true }),
          model: t.String({ additionalProperties: true }),
          registrationNumber: t.String({ additionalProperties: true }),
          ownerId: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
    sender: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          email: t.String({ additionalProperties: true }),
          firebaseUid: t.String({ additionalProperties: true }),
          isEmailVerified: t.Boolean({ additionalProperties: true }),
          firstName: __nullable__(t.String({ additionalProperties: true })),
          lastName: __nullable__(t.String({ additionalProperties: true })),
          displayPicture: __nullable__(
            t.String({ additionalProperties: true }),
          ),
          location: __nullable__(t.String({ additionalProperties: true })),
          accountStatus: t.Union(
            [
              t.Literal("ONBOARDING"),
              t.Literal("SELECT_SUBSCRIPTION"),
              t.Literal("ACTIVE"),
            ],
            { additionalProperties: true },
          ),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
    recipient: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          email: t.String({ additionalProperties: true }),
          firebaseUid: t.String({ additionalProperties: true }),
          isEmailVerified: t.Boolean({ additionalProperties: true }),
          firstName: __nullable__(t.String({ additionalProperties: true })),
          lastName: __nullable__(t.String({ additionalProperties: true })),
          displayPicture: __nullable__(
            t.String({ additionalProperties: true }),
          ),
          location: __nullable__(t.String({ additionalProperties: true })),
          accountStatus: t.Union(
            [
              t.Literal("ONBOARDING"),
              t.Literal("SELECT_SUBSCRIPTION"),
              t.Literal("ACTIVE"),
            ],
            { additionalProperties: true },
          ),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
  },
  { additionalProperties: true },
);

export const VehicleTransferPlainInputCreate = t.Object(
  {
    status: t.Union(
      [t.Literal("REQUESTED"), t.Literal("ACCEPTED"), t.Literal("REJECTED")],
      { additionalProperties: true },
    ),
    transferDate: t.Date({ additionalProperties: true }),
    responseDate: t.Optional(
      __nullable__(t.Date({ additionalProperties: true })),
    ),
    reason: t.Optional(__nullable__(t.String({ additionalProperties: true }))),
    excludedMediaFileTypes: t.Array(
      t.Union([t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")], {
        additionalProperties: true,
      }),
    ),
  },
  { additionalProperties: true },
);

export const VehicleTransferPlainInputUpdate = t.Object(
  {
    status: t.Union(
      [t.Literal("REQUESTED"), t.Literal("ACCEPTED"), t.Literal("REJECTED")],
      { additionalProperties: true },
    ),
    transferDate: t.Date({ additionalProperties: true }),
    responseDate: t.Optional(
      __nullable__(t.Date({ additionalProperties: true })),
    ),
    reason: t.Optional(__nullable__(t.String({ additionalProperties: true }))),
    excludedMediaFileTypes: t.Array(
      t.Union([t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")], {
        additionalProperties: true,
      }),
    ),
  },
  { additionalProperties: true },
);

export const VehicleTransferRelationsInputCreate = t.Object(
  {
    vehicle: t.Optional(
      t.Object(
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
    ),
    sender: t.Optional(
      t.Object(
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
    ),
    recipient: t.Optional(
      t.Object(
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
    ),
  },
  { additionalProperties: true },
);

export const VehicleTransferRelationsInputUpdate = t.Partial(
  t.Object(
    {
      vehicle: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: true }),
              },
              { additionalProperties: true },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
      sender: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: true }),
              },
              { additionalProperties: true },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
      recipient: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: true }),
              },
              { additionalProperties: true },
            ),
            disconnect: t.Boolean(),
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

export const VehicleTransferWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object({
        AND: t.Union([Self, t.Array(Self)]),
        NOT: t.Union([Self, t.Array(Self)]),
        OR: t.Array(Self),
        id: t.String(),
        vehicleId: t.String(),
        senderId: t.String(),
        recipientId: t.String(),
        status: t.Union(
          [
            t.Literal("REQUESTED"),
            t.Literal("ACCEPTED"),
            t.Literal("REJECTED"),
          ],
          { additionalProperties: true },
        ),
        transferDate: t.Date(),
        responseDate: t.Date(),
        reason: t.String(),
        excludedMediaFileTypes: t.Array(
          t.Union(
            [t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")],
            { additionalProperties: true },
          ),
        ),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      }),
    { $id: "VehicleTransfer" },
  ),
  { additionalProperties: true },
);

export const VehicleTransferWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect([
      t.Partial(t.Object({ id: t.String() })),
      t.Union([t.Object({ id: t.String() })]),
      t.Partial(
        t.Object({
          AND: t.Union([Self, t.Array(Self)]),
          NOT: t.Union([Self, t.Array(Self)]),
          OR: t.Array(Self),
        }),
      ),
      t.Partial(
        t.Object(
          {
            id: t.String(),
            vehicleId: t.String(),
            senderId: t.String(),
            recipientId: t.String(),
            status: t.Union(
              [
                t.Literal("REQUESTED"),
                t.Literal("ACCEPTED"),
                t.Literal("REJECTED"),
              ],
              { additionalProperties: true },
            ),
            transferDate: t.Date(),
            responseDate: t.Date(),
            reason: t.String(),
            excludedMediaFileTypes: t.Array(
              t.Union(
                [t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")],
                { additionalProperties: true },
              ),
            ),
            createdAt: t.Date(),
            updatedAt: t.Date(),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
    ]),
  { $id: "VehicleTransfer" },
);

export const VehicleTransfer = t.Composite(
  [VehicleTransferPlain, VehicleTransferRelations],
  { additionalProperties: true },
);

export const VehicleTransferInputCreate = t.Composite(
  [VehicleTransferPlainInputCreate, VehicleTransferRelationsInputCreate],
  { additionalProperties: true },
);

export const VehicleTransferInputUpdate = t.Composite(
  [VehicleTransferPlainInputUpdate, VehicleTransferRelationsInputUpdate],
  { additionalProperties: true },
);
