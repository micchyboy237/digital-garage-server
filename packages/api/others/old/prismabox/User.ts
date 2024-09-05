import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const UserPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    email: t.String({ additionalProperties: true }),
    firebaseUid: t.String({ additionalProperties: true }),
    isEmailVerified: t.Boolean({ additionalProperties: true }),
    firstName: __nullable__(t.String({ additionalProperties: true })),
    lastName: __nullable__(t.String({ additionalProperties: true })),
    displayPicture: __nullable__(t.String({ additionalProperties: true })),
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
);

export const UserRelations = t.Object(
  {
    sessions: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          token: t.String({ additionalProperties: true }),
          expiresAt: t.Date({ additionalProperties: true }),
          accountId: t.String({ additionalProperties: true }),
          deviceFingerprint: t.String({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
    vehicles: t.Array(
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
    transfersReceived: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          vehicleId: t.String({ additionalProperties: true }),
          senderId: t.String({ additionalProperties: true }),
          recipientId: t.String({ additionalProperties: true }),
          status: t.Union(
            [
              t.Literal("REQUESTED"),
              t.Literal("ACCEPTED"),
              t.Literal("REJECTED"),
            ],
            { additionalProperties: true },
          ),
          transferDate: t.Date({ additionalProperties: true }),
          responseDate: __nullable__(t.Date({ additionalProperties: true })),
          reason: __nullable__(t.String({ additionalProperties: true })),
          excludedMediaFileTypes: t.Array(
            t.Union(
              [t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")],
              { additionalProperties: true },
            ),
          ),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
    transfersSent: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          vehicleId: t.String({ additionalProperties: true }),
          senderId: t.String({ additionalProperties: true }),
          recipientId: t.String({ additionalProperties: true }),
          status: t.Union(
            [
              t.Literal("REQUESTED"),
              t.Literal("ACCEPTED"),
              t.Literal("REJECTED"),
            ],
            { additionalProperties: true },
          ),
          transferDate: t.Date({ additionalProperties: true }),
          responseDate: __nullable__(t.Date({ additionalProperties: true })),
          reason: __nullable__(t.String({ additionalProperties: true })),
          excludedMediaFileTypes: t.Array(
            t.Union(
              [t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")],
              { additionalProperties: true },
            ),
          ),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
    subscription: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          productId: t.String({ additionalProperties: true }),
          plan: __nullable__(
            t.Union(
              [
                t.Literal("DAY"),
                t.Literal("WEEK"),
                t.Literal("MONTH"),
                t.Literal("YEAR"),
              ],
              { additionalProperties: true },
            ),
          ),
          status: t.Union(
            [t.Literal("ACTIVE"), t.Literal("CANCELED"), t.Literal("EXPIRED")],
            { additionalProperties: true },
          ),
          startDate: __nullable__(t.Date({ additionalProperties: true })),
          endDate: __nullable__(t.Date({ additionalProperties: true })),
          expiresAt: __nullable__(t.Date({ additionalProperties: true })),
          userId: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
    vehicleOwnerships: t.Array(
      t.Object(
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
      ),
    ),
    accounts: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          provider: t.Union(
            [
              t.Literal("EMAIL_PASSWORD"),
              t.Literal("GOOGLE"),
              t.Literal("APPLE"),
            ],
            { additionalProperties: true },
          ),
          lastLogin: __nullable__(t.Date({ additionalProperties: true })),
          userId: t.String({ additionalProperties: true }),
          email: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
  },
  { additionalProperties: true },
);

export const UserPlainInputCreate = t.Object(
  {
    email: t.String({ additionalProperties: true }),
    isEmailVerified: t.Boolean({ additionalProperties: true }),
    firstName: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    lastName: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    displayPicture: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    location: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    accountStatus: t.Union(
      [
        t.Literal("ONBOARDING"),
        t.Literal("SELECT_SUBSCRIPTION"),
        t.Literal("ACTIVE"),
      ],
      { additionalProperties: true },
    ),
  },
  { additionalProperties: true },
);

export const UserPlainInputUpdate = t.Object(
  {
    email: t.String({ additionalProperties: true }),
    isEmailVerified: t.Boolean({ additionalProperties: true }),
    firstName: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    lastName: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    displayPicture: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    location: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    accountStatus: t.Union(
      [
        t.Literal("ONBOARDING"),
        t.Literal("SELECT_SUBSCRIPTION"),
        t.Literal("ACTIVE"),
      ],
      { additionalProperties: true },
    ),
  },
  { additionalProperties: true },
);

export const UserRelationsInputCreate = t.Object(
  {
    sessions: t.Optional(
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
    vehicles: t.Optional(
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
    transfersReceived: t.Optional(
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
    transfersSent: t.Optional(
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
    subscription: t.Optional(
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
    vehicleOwnerships: t.Optional(
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
    accounts: t.Optional(
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
  },
  { additionalProperties: true },
);

export const UserRelationsInputUpdate = t.Partial(
  t.Object(
    {
      sessions: t.Partial(
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
      vehicles: t.Partial(
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
      transfersReceived: t.Partial(
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
      transfersSent: t.Partial(
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
      subscription: t.Partial(
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
      vehicleOwnerships: t.Partial(
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
      accounts: t.Partial(
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
    },
    { additionalProperties: true },
  ),
  { additionalProperties: true },
);

export const UserWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object({
        AND: t.Union([Self, t.Array(Self)]),
        NOT: t.Union([Self, t.Array(Self)]),
        OR: t.Array(Self),
        id: t.String(),
        email: t.String(),
        firebaseUid: t.String(),
        isEmailVerified: t.Boolean(),
        firstName: t.String(),
        lastName: t.String(),
        displayPicture: t.String(),
        location: t.String(),
        accountStatus: t.Union(
          [
            t.Literal("ONBOARDING"),
            t.Literal("SELECT_SUBSCRIPTION"),
            t.Literal("ACTIVE"),
          ],
          { additionalProperties: true },
        ),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      }),
    { $id: "User" },
  ),
  { additionalProperties: true },
);

export const UserWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect([
      t.Partial(
        t.Object({
          id: t.String(),
          email: t.String(),
          firebaseUid: t.String(),
        }),
      ),
      t.Union([
        t.Object({ id: t.String() }),
        t.Object({ email: t.String() }),
        t.Object({ firebaseUid: t.String() }),
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
            email: t.String(),
            firebaseUid: t.String(),
            isEmailVerified: t.Boolean(),
            firstName: t.String(),
            lastName: t.String(),
            displayPicture: t.String(),
            location: t.String(),
            accountStatus: t.Union(
              [
                t.Literal("ONBOARDING"),
                t.Literal("SELECT_SUBSCRIPTION"),
                t.Literal("ACTIVE"),
              ],
              { additionalProperties: true },
            ),
            createdAt: t.Date(),
            updatedAt: t.Date(),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
    ]),
  { $id: "User" },
);

export const User = t.Composite([UserPlain, UserRelations], {
  additionalProperties: true,
});

export const UserInputCreate = t.Composite(
  [UserPlainInputCreate, UserRelationsInputCreate],
  { additionalProperties: true },
);

export const UserInputUpdate = t.Composite(
  [UserPlainInputUpdate, UserRelationsInputUpdate],
  { additionalProperties: true },
);
