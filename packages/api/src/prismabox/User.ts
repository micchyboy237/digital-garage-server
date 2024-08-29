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
          provider: t.Union(
            [
              t.Literal("EMAIL_PASSWORD"),
              t.Literal("GOOGLE"),
              t.Literal("APPLE"),
            ],
            { additionalProperties: true },
          ),
          deviceFingerprint: t.String({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
    ),
    vehicles: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          make: t.String({ additionalProperties: true }),
          model: t.String({ additionalProperties: true }),
          registrationNumber: t.String({ additionalProperties: true }),
          ownerId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
    ),
    posts: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          date: t.Date({ additionalProperties: true }),
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
          ownershipId: __nullable__(t.String({ additionalProperties: true })),
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
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
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
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
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
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
        },
        { additionalProperties: true },
      ),
    ),
    ownerships: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
          vehicleId: t.String({ additionalProperties: true }),
          isCurrentOwner: t.Boolean({ additionalProperties: true }),
          startDate: t.Date({ additionalProperties: true }),
          endDate: __nullable__(t.Date({ additionalProperties: true })),
          excludedPosts: t.Array(t.String({ additionalProperties: true }), {
            additionalProperties: true,
          }),
          excludedPhotos: t.Array(t.String({ additionalProperties: true }), {
            additionalProperties: true,
          }),
          excludedDocs: t.Array(t.String({ additionalProperties: true }), {
            additionalProperties: true,
          }),
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
    ),
  },
  { additionalProperties: true },
);

export const UserPlainInput = t.Object(
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
            { additionalProperties: true },
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
            { additionalProperties: true },
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
            { additionalProperties: true },
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
            { additionalProperties: true },
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
    ownerships: t.Optional(
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
      ownerships: t.Partial(
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

export const UserWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          email: t.String({ additionalProperties: true }),
          firebaseUid: t.String({ additionalProperties: true }),
          isEmailVerified: t.Boolean({ additionalProperties: true }),
          firstName: t.String({ additionalProperties: true }),
          lastName: t.String({ additionalProperties: true }),
          displayPicture: t.String({ additionalProperties: true }),
          location: t.String({ additionalProperties: true }),
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
      ),
    { $id: "User" },
  ),
  { additionalProperties: true },
);

export const UserWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String({ additionalProperties: true }),
              email: t.String({ additionalProperties: true }),
              firebaseUid: t.String({ additionalProperties: true }),
            },
            { additionalProperties: true },
          ),
          { additionalProperties: true },
        ),
        t.Union(
          [
            t.Object({ id: t.String({ additionalProperties: true }) }),
            t.Object({ email: t.String({ additionalProperties: true }) }),
            t.Object({ firebaseUid: t.String({ additionalProperties: true }) }),
          ],
          { additionalProperties: true },
        ),
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
            isEmailVerified: t.Boolean({ additionalProperties: true }),
            firstName: t.String({ additionalProperties: true }),
            lastName: t.String({ additionalProperties: true }),
            displayPicture: t.String({ additionalProperties: true }),
            location: t.String({ additionalProperties: true }),
            accountStatus: t.Union(
              [
                t.Literal("ONBOARDING"),
                t.Literal("SELECT_SUBSCRIPTION"),
                t.Literal("ACTIVE"),
              ],
              { additionalProperties: true },
            ),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "User" },
);

export const User = t.Composite([UserPlain, UserRelations], {
  additionalProperties: true,
});

export const UserInputCreate = t.Composite(
  [UserPlainInput, UserRelationsInputCreate],
  { additionalProperties: true },
);

export const UserInputUpdate = t.Composite(
  [UserPlainInput, UserRelationsInputUpdate],
  { additionalProperties: true },
);
