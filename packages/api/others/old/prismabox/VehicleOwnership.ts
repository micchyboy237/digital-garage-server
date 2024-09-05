import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const VehicleOwnershipPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    userId: t.String({ additionalProperties: true }),
    vehicleId: t.String({ additionalProperties: true }),
    isCurrentOwner: t.Boolean({ additionalProperties: true }),
    vehicleDisplayPhotoId: __nullable__(
      t.String({ additionalProperties: true }),
    ),
    startDate: t.Date({ additionalProperties: true }),
    endDate: __nullable__(t.Date({ additionalProperties: true })),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleOwnershipRelations = t.Object(
  {
    vehicleDisplayPhoto: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          type: t.Union(
            [t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")],
            { additionalProperties: true },
          ),
          mimeType: t.String({ additionalProperties: true }),
          fileName: t.String({ additionalProperties: true }),
          url: t.String({ additionalProperties: true }),
          thumbnailUrl: t.String({ additionalProperties: true }),
          postId: __nullable__(t.String({ additionalProperties: true })),
          ownershipId: __nullable__(t.String({ additionalProperties: true })),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
    user: __nullable__(
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
    posts: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          title: t.String({ additionalProperties: true }),
          category: t.Union([t.Literal("GALLERY"), t.Literal("HISTORY")], {
            additionalProperties: true,
          }),
          description: __nullable__(t.String({ additionalProperties: true })),
          type: __nullable__(
            t.Union(
              [
                t.Literal("REMINDER"),
                t.Literal("INVOICE"),
                t.Literal("DOCUMENT"),
              ],
              { additionalProperties: true },
            ),
          ),
          createdById: t.String({ additionalProperties: true }),
          ownershipId: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
    vehicleFiles: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          type: t.Union(
            [t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")],
            { additionalProperties: true },
          ),
          mimeType: t.String({ additionalProperties: true }),
          fileName: t.String({ additionalProperties: true }),
          url: t.String({ additionalProperties: true }),
          thumbnailUrl: t.String({ additionalProperties: true }),
          postId: __nullable__(t.String({ additionalProperties: true })),
          ownershipId: __nullable__(t.String({ additionalProperties: true })),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
    vehicleDetails: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          fromApi: t.Boolean({ additionalProperties: true }),
          registrationNumber: t.String({ additionalProperties: true }),
          make: t.String({ additionalProperties: true }),
          model: t.String({ additionalProperties: true }),
          colour: t.String({ additionalProperties: true }),
          yearOfManufacture: t.Integer({ additionalProperties: true }),
          taxStatus: t.String({ additionalProperties: true }),
          taxDueDate: t.Date({ additionalProperties: true }),
          motStatus: t.String({ additionalProperties: true }),
          motExpiryDate: __nullable__(t.Date({ additionalProperties: true })),
          engineCapacity: __nullable__(
            t.Integer({ additionalProperties: true }),
          ),
          co2Emissions: __nullable__(t.Integer({ additionalProperties: true })),
          fuelType: __nullable__(t.String({ additionalProperties: true })),
          markedForExport: __nullable__(
            t.Boolean({ additionalProperties: true }),
          ),
          typeApproval: __nullable__(t.String({ additionalProperties: true })),
          wheelplan: __nullable__(t.String({ additionalProperties: true })),
          artEndDate: __nullable__(t.Date({ additionalProperties: true })),
          monthOfFirstRegistration: __nullable__(
            t.Date({ additionalProperties: true }),
          ),
          euroStatus: __nullable__(t.String({ additionalProperties: true })),
          dateOfLastV5CIssued: __nullable__(
            t.Date({ additionalProperties: true }),
          ),
          realDrivingEmissions: __nullable__(
            t.String({ additionalProperties: true }),
          ),
          revenueWeight: __nullable__(
            t.Integer({ additionalProperties: true }),
          ),
          ownershipId: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
  },
  { additionalProperties: true },
);

export const VehicleOwnershipPlainInputCreate = t.Object(
  {
    isCurrentOwner: t.Boolean({ additionalProperties: true }),
    startDate: t.Date({ additionalProperties: true }),
    endDate: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
  },
  { additionalProperties: true },
);

export const VehicleOwnershipPlainInputUpdate = t.Object(
  {
    isCurrentOwner: t.Boolean({ additionalProperties: true }),
    startDate: t.Date({ additionalProperties: true }),
    endDate: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
  },
  { additionalProperties: true },
);

export const VehicleOwnershipRelationsInputCreate = t.Object(
  {
    vehicleDisplayPhoto: t.Optional(
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
    user: t.Optional(
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
    posts: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: true }),
              },
              { additionalProperties: true },
            ),
          ),
        },
        { additionalProperties: true },
      ),
    ),
    vehicleFiles: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: true }),
              },
              { additionalProperties: true },
            ),
          ),
        },
        { additionalProperties: true },
      ),
    ),
    vehicleDetails: t.Optional(
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

export const VehicleOwnershipRelationsInputUpdate = t.Partial(
  t.Object(
    {
      vehicleDisplayPhoto: t.Partial(
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
      user: t.Partial(
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
      posts: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: true }),
                },
                { additionalProperties: true },
              ),
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: true }),
                },
                { additionalProperties: true },
              ),
            ),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
      vehicleFiles: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: true }),
                },
                { additionalProperties: true },
              ),
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: true }),
                },
                { additionalProperties: true },
              ),
            ),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
      vehicleDetails: t.Partial(
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

export const VehicleOwnershipWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object({
        AND: t.Union([Self, t.Array(Self)]),
        NOT: t.Union([Self, t.Array(Self)]),
        OR: t.Array(Self),
        id: t.String(),
        userId: t.String(),
        vehicleId: t.String(),
        isCurrentOwner: t.Boolean(),
        vehicleDisplayPhotoId: t.String(),
        startDate: t.Date(),
        endDate: t.Date(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      }),
    { $id: "VehicleOwnership" },
  ),
  { additionalProperties: true },
);

export const VehicleOwnershipWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect([
      t.Partial(
        t.Object({
          id: t.String(),
          vehicleDisplayPhotoId: t.String(),
          userId_vehicleId: t.Object({
            userId: t.String(),
            vehicleId: t.String(),
          }),
        }),
      ),
      t.Union([
        t.Object({ id: t.String() }),
        t.Object({ vehicleDisplayPhotoId: t.String() }),
        t.Object({
          userId_vehicleId: t.Object({
            userId: t.String(),
            vehicleId: t.String(),
          }),
        }),
      ]),
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
            userId: t.String(),
            vehicleId: t.String(),
            isCurrentOwner: t.Boolean(),
            vehicleDisplayPhotoId: t.String(),
            startDate: t.Date(),
            endDate: t.Date(),
            createdAt: t.Date(),
            updatedAt: t.Date(),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
    ]),
  { $id: "VehicleOwnership" },
);

export const VehicleOwnership = t.Composite(
  [VehicleOwnershipPlain, VehicleOwnershipRelations],
  { additionalProperties: true },
);

export const VehicleOwnershipInputCreate = t.Composite(
  [VehicleOwnershipPlainInputCreate, VehicleOwnershipRelationsInputCreate],
  { additionalProperties: true },
);

export const VehicleOwnershipInputUpdate = t.Composite(
  [VehicleOwnershipPlainInputUpdate, VehicleOwnershipRelationsInputUpdate],
  { additionalProperties: true },
);
