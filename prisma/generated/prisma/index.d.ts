
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model UserData
 * 
 */
export type UserData = $Result.DefaultSelection<Prisma.$UserDataPayload>
/**
 * Model UserPreference
 * 
 */
export type UserPreference = $Result.DefaultSelection<Prisma.$UserPreferencePayload>
/**
 * Model UserLookingFor
 * 
 */
export type UserLookingFor = $Result.DefaultSelection<Prisma.$UserLookingForPayload>
/**
 * Model UserGenderInterest
 * 
 */
export type UserGenderInterest = $Result.DefaultSelection<Prisma.$UserGenderInterestPayload>
/**
 * Model UserSexualityInterest
 * 
 */
export type UserSexualityInterest = $Result.DefaultSelection<Prisma.$UserSexualityInterestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const VerificationTokenType: {
  EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
  PASSWORD_RESET: 'PASSWORD_RESET'
};

export type VerificationTokenType = (typeof VerificationTokenType)[keyof typeof VerificationTokenType]


export const Gender: {
  MAN: 'MAN',
  WOMAN: 'WOMAN',
  TRANS_MAN: 'TRANS_MAN',
  TRANS_WOMAN: 'TRANS_WOMAN'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const GenderInterest: {
  MAN: 'MAN',
  WOMAN: 'WOMAN',
  TRANS_MAN: 'TRANS_MAN',
  TRANS_WOMAN: 'TRANS_WOMAN'
};

export type GenderInterest = (typeof GenderInterest)[keyof typeof GenderInterest]


export const Sexuality: {
  STRAIGHT: 'STRAIGHT',
  BISEXUAL: 'BISEXUAL',
  GAY: 'GAY',
  LESBIAN: 'LESBIAN',
  PANSEXUAL: 'PANSEXUAL',
  ASEXUAL: 'ASEXUAL',
  OTHER: 'OTHER'
};

export type Sexuality = (typeof Sexuality)[keyof typeof Sexuality]


export const SexualityInterest: {
  STRAIGHT: 'STRAIGHT',
  BISEXUAL: 'BISEXUAL',
  GAY: 'GAY',
  LESBIAN: 'LESBIAN',
  PANSEXUAL: 'PANSEXUAL',
  ASEXUAL: 'ASEXUAL',
  OTHER: 'OTHER'
};

export type SexualityInterest = (typeof SexualityInterest)[keyof typeof SexualityInterest]


export const LookingFor: {
  CHAT: 'CHAT',
  FRIENDSHIP: 'FRIENDSHIP',
  CASUAL_DATING: 'CASUAL_DATING',
  SERIOUS_RELATIONSHIP: 'SERIOUS_RELATIONSHIP',
  HOOKUP: 'HOOKUP',
  NETWORKING: 'NETWORKING',
  NOTHING_SPECIFIC: 'NOTHING_SPECIFIC'
};

export type LookingFor = (typeof LookingFor)[keyof typeof LookingFor]


export const RelationshipStatus: {
  SINGLE: 'SINGLE',
  IN_RELATION: 'IN_RELATION',
  ENGAGED: 'ENGAGED',
  MARRIED: 'MARRIED',
  SEPARATED: 'SEPARATED',
  DIVORCED: 'DIVORCED',
  WIDOWED: 'WIDOWED',
  COMPLICATED: 'COMPLICATED',
  OPEN: 'OPEN'
};

export type RelationshipStatus = (typeof RelationshipStatus)[keyof typeof RelationshipStatus]


export const TransStatus: {
  CIS: 'CIS',
  TRANS: 'TRANS'
};

export type TransStatus = (typeof TransStatus)[keyof typeof TransStatus]


export const City: {
  CENTRUM: 'CENTRUM',
  STRAIGHT: 'STRAIGHT',
  BISEXUAL: 'BISEXUAL',
  GAY: 'GAY',
  LESBIAN: 'LESBIAN',
  TRANS: 'TRANS'
};

export type City = (typeof City)[keyof typeof City]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type VerificationTokenType = $Enums.VerificationTokenType

export const VerificationTokenType: typeof $Enums.VerificationTokenType

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type GenderInterest = $Enums.GenderInterest

export const GenderInterest: typeof $Enums.GenderInterest

export type Sexuality = $Enums.Sexuality

export const Sexuality: typeof $Enums.Sexuality

export type SexualityInterest = $Enums.SexualityInterest

export const SexualityInterest: typeof $Enums.SexualityInterest

export type LookingFor = $Enums.LookingFor

export const LookingFor: typeof $Enums.LookingFor

export type RelationshipStatus = $Enums.RelationshipStatus

export const RelationshipStatus: typeof $Enums.RelationshipStatus

export type TransStatus = $Enums.TransStatus

export const TransStatus: typeof $Enums.TransStatus

export type City = $Enums.City

export const City: typeof $Enums.City

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userData`: Exposes CRUD operations for the **UserData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserData
    * const userData = await prisma.userData.findMany()
    * ```
    */
  get userData(): Prisma.UserDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreference`: Exposes CRUD operations for the **UserPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreference.findMany()
    * ```
    */
  get userPreference(): Prisma.UserPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLookingFor`: Exposes CRUD operations for the **UserLookingFor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLookingFors
    * const userLookingFors = await prisma.userLookingFor.findMany()
    * ```
    */
  get userLookingFor(): Prisma.UserLookingForDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGenderInterest`: Exposes CRUD operations for the **UserGenderInterest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGenderInterests
    * const userGenderInterests = await prisma.userGenderInterest.findMany()
    * ```
    */
  get userGenderInterest(): Prisma.UserGenderInterestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSexualityInterest`: Exposes CRUD operations for the **UserSexualityInterest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSexualityInterests
    * const userSexualityInterests = await prisma.userSexualityInterest.findMany()
    * ```
    */
  get userSexualityInterest(): Prisma.UserSexualityInterestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    RefreshToken: 'RefreshToken',
    VerificationToken: 'VerificationToken',
    UserData: 'UserData',
    UserPreference: 'UserPreference',
    UserLookingFor: 'UserLookingFor',
    UserGenderInterest: 'UserGenderInterest',
    UserSexualityInterest: 'UserSexualityInterest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "refreshToken" | "verificationToken" | "userData" | "userPreference" | "userLookingFor" | "userGenderInterest" | "userSexualityInterest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      UserData: {
        payload: Prisma.$UserDataPayload<ExtArgs>
        fields: Prisma.UserDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          findFirst: {
            args: Prisma.UserDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          findMany: {
            args: Prisma.UserDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>[]
          }
          create: {
            args: Prisma.UserDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          createMany: {
            args: Prisma.UserDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>[]
          }
          delete: {
            args: Prisma.UserDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          update: {
            args: Prisma.UserDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          deleteMany: {
            args: Prisma.UserDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>[]
          }
          upsert: {
            args: Prisma.UserDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          aggregate: {
            args: Prisma.UserDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserData>
          }
          groupBy: {
            args: Prisma.UserDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDataCountArgs<ExtArgs>
            result: $Utils.Optional<UserDataCountAggregateOutputType> | number
          }
        }
      }
      UserPreference: {
        payload: Prisma.$UserPreferencePayload<ExtArgs>
        fields: Prisma.UserPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findFirst: {
            args: Prisma.UserPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findMany: {
            args: Prisma.UserPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          create: {
            args: Prisma.UserPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          createMany: {
            args: Prisma.UserPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          delete: {
            args: Prisma.UserPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          update: {
            args: Prisma.UserPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          deleteMany: {
            args: Prisma.UserPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          upsert: {
            args: Prisma.UserPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          aggregate: {
            args: Prisma.UserPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreference>
          }
          groupBy: {
            args: Prisma.UserPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceCountAggregateOutputType> | number
          }
        }
      }
      UserLookingFor: {
        payload: Prisma.$UserLookingForPayload<ExtArgs>
        fields: Prisma.UserLookingForFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLookingForFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLookingForPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLookingForFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLookingForPayload>
          }
          findFirst: {
            args: Prisma.UserLookingForFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLookingForPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLookingForFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLookingForPayload>
          }
          findMany: {
            args: Prisma.UserLookingForFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLookingForPayload>[]
          }
          create: {
            args: Prisma.UserLookingForCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLookingForPayload>
          }
          createMany: {
            args: Prisma.UserLookingForCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLookingForCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLookingForPayload>[]
          }
          delete: {
            args: Prisma.UserLookingForDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLookingForPayload>
          }
          update: {
            args: Prisma.UserLookingForUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLookingForPayload>
          }
          deleteMany: {
            args: Prisma.UserLookingForDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLookingForUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLookingForUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLookingForPayload>[]
          }
          upsert: {
            args: Prisma.UserLookingForUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLookingForPayload>
          }
          aggregate: {
            args: Prisma.UserLookingForAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLookingFor>
          }
          groupBy: {
            args: Prisma.UserLookingForGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLookingForGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLookingForCountArgs<ExtArgs>
            result: $Utils.Optional<UserLookingForCountAggregateOutputType> | number
          }
        }
      }
      UserGenderInterest: {
        payload: Prisma.$UserGenderInterestPayload<ExtArgs>
        fields: Prisma.UserGenderInterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGenderInterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenderInterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGenderInterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenderInterestPayload>
          }
          findFirst: {
            args: Prisma.UserGenderInterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenderInterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGenderInterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenderInterestPayload>
          }
          findMany: {
            args: Prisma.UserGenderInterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenderInterestPayload>[]
          }
          create: {
            args: Prisma.UserGenderInterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenderInterestPayload>
          }
          createMany: {
            args: Prisma.UserGenderInterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGenderInterestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenderInterestPayload>[]
          }
          delete: {
            args: Prisma.UserGenderInterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenderInterestPayload>
          }
          update: {
            args: Prisma.UserGenderInterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenderInterestPayload>
          }
          deleteMany: {
            args: Prisma.UserGenderInterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGenderInterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGenderInterestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenderInterestPayload>[]
          }
          upsert: {
            args: Prisma.UserGenderInterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenderInterestPayload>
          }
          aggregate: {
            args: Prisma.UserGenderInterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGenderInterest>
          }
          groupBy: {
            args: Prisma.UserGenderInterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGenderInterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGenderInterestCountArgs<ExtArgs>
            result: $Utils.Optional<UserGenderInterestCountAggregateOutputType> | number
          }
        }
      }
      UserSexualityInterest: {
        payload: Prisma.$UserSexualityInterestPayload<ExtArgs>
        fields: Prisma.UserSexualityInterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSexualityInterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSexualityInterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSexualityInterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSexualityInterestPayload>
          }
          findFirst: {
            args: Prisma.UserSexualityInterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSexualityInterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSexualityInterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSexualityInterestPayload>
          }
          findMany: {
            args: Prisma.UserSexualityInterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSexualityInterestPayload>[]
          }
          create: {
            args: Prisma.UserSexualityInterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSexualityInterestPayload>
          }
          createMany: {
            args: Prisma.UserSexualityInterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSexualityInterestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSexualityInterestPayload>[]
          }
          delete: {
            args: Prisma.UserSexualityInterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSexualityInterestPayload>
          }
          update: {
            args: Prisma.UserSexualityInterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSexualityInterestPayload>
          }
          deleteMany: {
            args: Prisma.UserSexualityInterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSexualityInterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSexualityInterestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSexualityInterestPayload>[]
          }
          upsert: {
            args: Prisma.UserSexualityInterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSexualityInterestPayload>
          }
          aggregate: {
            args: Prisma.UserSexualityInterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSexualityInterest>
          }
          groupBy: {
            args: Prisma.UserSexualityInterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSexualityInterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSexualityInterestCountArgs<ExtArgs>
            result: $Utils.Optional<UserSexualityInterestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    refreshToken?: RefreshTokenOmit
    verificationToken?: VerificationTokenOmit
    userData?: UserDataOmit
    userPreference?: UserPreferenceOmit
    userLookingFor?: UserLookingForOmit
    userGenderInterest?: UserGenderInterestOmit
    userSexualityInterest?: UserSexualityInterestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    refreshTokens: number
    verificationTokens: number
    lookingFor: number
    genderInterest: number
    sexualityInteres: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UsersCountOutputTypeCountRefreshTokensArgs
    verificationTokens?: boolean | UsersCountOutputTypeCountVerificationTokensArgs
    lookingFor?: boolean | UsersCountOutputTypeCountLookingForArgs
    genderInterest?: boolean | UsersCountOutputTypeCountGenderInterestArgs
    sexualityInteres?: boolean | UsersCountOutputTypeCountSexualityInteresArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountVerificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLookingForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLookingForWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGenderInterestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGenderInterestWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSexualityInteresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSexualityInterestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type UsersSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    passwordHash: string | null
    emailVerified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    lat: number | null
    lng: number | null
    locationEnabled: boolean | null
    locationUpdatedAt: Date | null
    role: $Enums.UserRole | null
    relationshipStatus: $Enums.RelationshipStatus | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    passwordHash: string | null
    emailVerified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    lat: number | null
    lng: number | null
    locationEnabled: boolean | null
    locationUpdatedAt: Date | null
    role: $Enums.UserRole | null
    relationshipStatus: $Enums.RelationshipStatus | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    passwordHash: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    lat: number
    lng: number
    locationEnabled: number
    locationUpdatedAt: number
    role: number
    relationshipStatus: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type UsersSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    passwordHash?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    lat?: true
    lng?: true
    locationEnabled?: true
    locationUpdatedAt?: true
    role?: true
    relationshipStatus?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    passwordHash?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    lat?: true
    lng?: true
    locationEnabled?: true
    locationUpdatedAt?: true
    role?: true
    relationshipStatus?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    passwordHash?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    lat?: true
    lng?: true
    locationEnabled?: true
    locationUpdatedAt?: true
    role?: true
    relationshipStatus?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified: Date | null
    createdAt: Date
    updatedAt: Date
    lat: number | null
    lng: number | null
    locationEnabled: boolean
    locationUpdatedAt: Date | null
    role: $Enums.UserRole
    relationshipStatus: $Enums.RelationshipStatus | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lat?: boolean
    lng?: boolean
    locationEnabled?: boolean
    locationUpdatedAt?: boolean
    role?: boolean
    relationshipStatus?: boolean
    refreshTokens?: boolean | Users$refreshTokensArgs<ExtArgs>
    verificationTokens?: boolean | Users$verificationTokensArgs<ExtArgs>
    lookingFor?: boolean | Users$lookingForArgs<ExtArgs>
    genderInterest?: boolean | Users$genderInterestArgs<ExtArgs>
    sexualityInteres?: boolean | Users$sexualityInteresArgs<ExtArgs>
    userData?: boolean | Users$userDataArgs<ExtArgs>
    userPreference?: boolean | Users$userPreferenceArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lat?: boolean
    lng?: boolean
    locationEnabled?: boolean
    locationUpdatedAt?: boolean
    role?: boolean
    relationshipStatus?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lat?: boolean
    lng?: boolean
    locationEnabled?: boolean
    locationUpdatedAt?: boolean
    role?: boolean
    relationshipStatus?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lat?: boolean
    lng?: boolean
    locationEnabled?: boolean
    locationUpdatedAt?: boolean
    role?: boolean
    relationshipStatus?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "passwordHash" | "emailVerified" | "createdAt" | "updatedAt" | "lat" | "lng" | "locationEnabled" | "locationUpdatedAt" | "role" | "relationshipStatus", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | Users$refreshTokensArgs<ExtArgs>
    verificationTokens?: boolean | Users$verificationTokensArgs<ExtArgs>
    lookingFor?: boolean | Users$lookingForArgs<ExtArgs>
    genderInterest?: boolean | Users$genderInterestArgs<ExtArgs>
    sexualityInteres?: boolean | Users$sexualityInteresArgs<ExtArgs>
    userData?: boolean | Users$userDataArgs<ExtArgs>
    userPreference?: boolean | Users$userPreferenceArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      verificationTokens: Prisma.$VerificationTokenPayload<ExtArgs>[]
      lookingFor: Prisma.$UserLookingForPayload<ExtArgs>[]
      genderInterest: Prisma.$UserGenderInterestPayload<ExtArgs>[]
      sexualityInteres: Prisma.$UserSexualityInterestPayload<ExtArgs>[]
      userData: Prisma.$UserDataPayload<ExtArgs> | null
      userPreference: Prisma.$UserPreferencePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      passwordHash: string
      emailVerified: Date | null
      createdAt: Date
      updatedAt: Date
      lat: number | null
      lng: number | null
      locationEnabled: boolean
      locationUpdatedAt: Date | null
      role: $Enums.UserRole
      relationshipStatus: $Enums.RelationshipStatus | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refreshTokens<T extends Users$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, Users$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verificationTokens<T extends Users$verificationTokensArgs<ExtArgs> = {}>(args?: Subset<T, Users$verificationTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lookingFor<T extends Users$lookingForArgs<ExtArgs> = {}>(args?: Subset<T, Users$lookingForArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLookingForPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genderInterest<T extends Users$genderInterestArgs<ExtArgs> = {}>(args?: Subset<T, Users$genderInterestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGenderInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sexualityInteres<T extends Users$sexualityInteresArgs<ExtArgs> = {}>(args?: Subset<T, Users$sexualityInteresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSexualityInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userData<T extends Users$userDataArgs<ExtArgs> = {}>(args?: Subset<T, Users$userDataArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userPreference<T extends Users$userPreferenceArgs<ExtArgs> = {}>(args?: Subset<T, Users$userPreferenceArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly passwordHash: FieldRef<"Users", 'String'>
    readonly emailVerified: FieldRef<"Users", 'DateTime'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
    readonly lat: FieldRef<"Users", 'Float'>
    readonly lng: FieldRef<"Users", 'Float'>
    readonly locationEnabled: FieldRef<"Users", 'Boolean'>
    readonly locationUpdatedAt: FieldRef<"Users", 'DateTime'>
    readonly role: FieldRef<"Users", 'UserRole'>
    readonly relationshipStatus: FieldRef<"Users", 'RelationshipStatus'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.refreshTokens
   */
  export type Users$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * Users.verificationTokens
   */
  export type Users$verificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    cursor?: VerificationTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * Users.lookingFor
   */
  export type Users$lookingForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLookingFor
     */
    select?: UserLookingForSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLookingFor
     */
    omit?: UserLookingForOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLookingForInclude<ExtArgs> | null
    where?: UserLookingForWhereInput
    orderBy?: UserLookingForOrderByWithRelationInput | UserLookingForOrderByWithRelationInput[]
    cursor?: UserLookingForWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLookingForScalarFieldEnum | UserLookingForScalarFieldEnum[]
  }

  /**
   * Users.genderInterest
   */
  export type Users$genderInterestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenderInterest
     */
    select?: UserGenderInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenderInterest
     */
    omit?: UserGenderInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenderInterestInclude<ExtArgs> | null
    where?: UserGenderInterestWhereInput
    orderBy?: UserGenderInterestOrderByWithRelationInput | UserGenderInterestOrderByWithRelationInput[]
    cursor?: UserGenderInterestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGenderInterestScalarFieldEnum | UserGenderInterestScalarFieldEnum[]
  }

  /**
   * Users.sexualityInteres
   */
  export type Users$sexualityInteresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSexualityInterest
     */
    select?: UserSexualityInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSexualityInterest
     */
    omit?: UserSexualityInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSexualityInterestInclude<ExtArgs> | null
    where?: UserSexualityInterestWhereInput
    orderBy?: UserSexualityInterestOrderByWithRelationInput | UserSexualityInterestOrderByWithRelationInput[]
    cursor?: UserSexualityInterestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSexualityInterestScalarFieldEnum | UserSexualityInterestScalarFieldEnum[]
  }

  /**
   * Users.userData
   */
  export type Users$userDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    where?: UserDataWhereInput
  }

  /**
   * Users.userPreference
   */
  export type Users$userPreferenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    where?: UserPreferenceWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    expiresAt: Date | null
    revokedAt: Date | null
    replacedBy: string | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    expiresAt: Date | null
    revokedAt: Date | null
    replacedBy: string | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    tokenHash: number
    userId: number
    expiresAt: number
    revokedAt: number
    replacedBy: number
    userAgent: number
    ipAddress: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    revokedAt?: true
    replacedBy?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    revokedAt?: true
    replacedBy?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    revokedAt?: true
    replacedBy?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    tokenHash: string
    userId: string
    expiresAt: Date
    revokedAt: Date | null
    replacedBy: string | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    replacedBy?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    replacedBy?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    replacedBy?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    replacedBy?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "userId" | "expiresAt" | "revokedAt" | "replacedBy" | "userAgent" | "ipAddress" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenHash: string
      userId: string
      expiresAt: Date
      revokedAt: Date | null
      replacedBy: string | null
      userAgent: string | null
      ipAddress: string | null
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly tokenHash: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revokedAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly replacedBy: FieldRef<"RefreshToken", 'String'>
    readonly userAgent: FieldRef<"RefreshToken", 'String'>
    readonly ipAddress: FieldRef<"RefreshToken", 'String'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    type: $Enums.VerificationTokenType | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    type: $Enums.VerificationTokenType | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    tokenHash: number
    userId: number
    type: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    type?: true
    expiresAt?: true
    createdAt?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    type?: true
    expiresAt?: true
    createdAt?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    type?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    tokenHash: string
    userId: string
    type: $Enums.VerificationTokenType
    expiresAt: Date
    createdAt: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "userId" | "type" | "expiresAt" | "createdAt", ExtArgs["result"]["verificationToken"]>
  export type VerificationTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type VerificationTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type VerificationTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenHash: string
      userId: string
      type: $Enums.VerificationTokenType
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly id: FieldRef<"VerificationToken", 'String'>
    readonly tokenHash: FieldRef<"VerificationToken", 'String'>
    readonly userId: FieldRef<"VerificationToken", 'String'>
    readonly type: FieldRef<"VerificationToken", 'VerificationTokenType'>
    readonly expiresAt: FieldRef<"VerificationToken", 'DateTime'>
    readonly createdAt: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
  }


  /**
   * Model UserData
   */

  export type AggregateUserData = {
    _count: UserDataCountAggregateOutputType | null
    _avg: UserDataAvgAggregateOutputType | null
    _sum: UserDataSumAggregateOutputType | null
    _min: UserDataMinAggregateOutputType | null
    _max: UserDataMaxAggregateOutputType | null
  }

  export type UserDataAvgAggregateOutputType = {
    id: number | null
    heightCm: number | null
    weightKg: number | null
  }

  export type UserDataSumAggregateOutputType = {
    id: number | null
    heightCm: number | null
    weightKg: number | null
  }

  export type UserDataMinAggregateOutputType = {
    id: number | null
    userId: string | null
    avatar: string | null
    avatarUrl: string | null
    nickname: string | null
    description: string | null
    bio: string | null
    birth: Date | null
    heightCm: number | null
    weightKg: number | null
    gender: $Enums.Gender | null
    sexuality: $Enums.Sexuality | null
    pronouns: string | null
    city: $Enums.City | null
    transStatus: $Enums.TransStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserDataMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    avatar: string | null
    avatarUrl: string | null
    nickname: string | null
    description: string | null
    bio: string | null
    birth: Date | null
    heightCm: number | null
    weightKg: number | null
    gender: $Enums.Gender | null
    sexuality: $Enums.Sexuality | null
    pronouns: string | null
    city: $Enums.City | null
    transStatus: $Enums.TransStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserDataCountAggregateOutputType = {
    id: number
    userId: number
    avatar: number
    avatarUrl: number
    nickname: number
    description: number
    bio: number
    birth: number
    heightCm: number
    weightKg: number
    gender: number
    sexuality: number
    pronouns: number
    city: number
    transStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserDataAvgAggregateInputType = {
    id?: true
    heightCm?: true
    weightKg?: true
  }

  export type UserDataSumAggregateInputType = {
    id?: true
    heightCm?: true
    weightKg?: true
  }

  export type UserDataMinAggregateInputType = {
    id?: true
    userId?: true
    avatar?: true
    avatarUrl?: true
    nickname?: true
    description?: true
    bio?: true
    birth?: true
    heightCm?: true
    weightKg?: true
    gender?: true
    sexuality?: true
    pronouns?: true
    city?: true
    transStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserDataMaxAggregateInputType = {
    id?: true
    userId?: true
    avatar?: true
    avatarUrl?: true
    nickname?: true
    description?: true
    bio?: true
    birth?: true
    heightCm?: true
    weightKg?: true
    gender?: true
    sexuality?: true
    pronouns?: true
    city?: true
    transStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserDataCountAggregateInputType = {
    id?: true
    userId?: true
    avatar?: true
    avatarUrl?: true
    nickname?: true
    description?: true
    bio?: true
    birth?: true
    heightCm?: true
    weightKg?: true
    gender?: true
    sexuality?: true
    pronouns?: true
    city?: true
    transStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserData to aggregate.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserData
    **/
    _count?: true | UserDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDataMaxAggregateInputType
  }

  export type GetUserDataAggregateType<T extends UserDataAggregateArgs> = {
        [P in keyof T & keyof AggregateUserData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserData[P]>
      : GetScalarType<T[P], AggregateUserData[P]>
  }




  export type UserDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDataWhereInput
    orderBy?: UserDataOrderByWithAggregationInput | UserDataOrderByWithAggregationInput[]
    by: UserDataScalarFieldEnum[] | UserDataScalarFieldEnum
    having?: UserDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDataCountAggregateInputType | true
    _avg?: UserDataAvgAggregateInputType
    _sum?: UserDataSumAggregateInputType
    _min?: UserDataMinAggregateInputType
    _max?: UserDataMaxAggregateInputType
  }

  export type UserDataGroupByOutputType = {
    id: number
    userId: string
    avatar: string | null
    avatarUrl: string | null
    nickname: string | null
    description: string | null
    bio: string | null
    birth: Date
    heightCm: number | null
    weightKg: number | null
    gender: $Enums.Gender | null
    sexuality: $Enums.Sexuality | null
    pronouns: string | null
    city: $Enums.City | null
    transStatus: $Enums.TransStatus | null
    createdAt: Date
    updatedAt: Date
    _count: UserDataCountAggregateOutputType | null
    _avg: UserDataAvgAggregateOutputType | null
    _sum: UserDataSumAggregateOutputType | null
    _min: UserDataMinAggregateOutputType | null
    _max: UserDataMaxAggregateOutputType | null
  }

  type GetUserDataGroupByPayload<T extends UserDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDataGroupByOutputType[P]>
            : GetScalarType<T[P], UserDataGroupByOutputType[P]>
        }
      >
    >


  export type UserDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    avatar?: boolean
    avatarUrl?: boolean
    nickname?: boolean
    description?: boolean
    bio?: boolean
    birth?: boolean
    heightCm?: boolean
    weightKg?: boolean
    gender?: boolean
    sexuality?: boolean
    pronouns?: boolean
    city?: boolean
    transStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userData"]>

  export type UserDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    avatar?: boolean
    avatarUrl?: boolean
    nickname?: boolean
    description?: boolean
    bio?: boolean
    birth?: boolean
    heightCm?: boolean
    weightKg?: boolean
    gender?: boolean
    sexuality?: boolean
    pronouns?: boolean
    city?: boolean
    transStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userData"]>

  export type UserDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    avatar?: boolean
    avatarUrl?: boolean
    nickname?: boolean
    description?: boolean
    bio?: boolean
    birth?: boolean
    heightCm?: boolean
    weightKg?: boolean
    gender?: boolean
    sexuality?: boolean
    pronouns?: boolean
    city?: boolean
    transStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userData"]>

  export type UserDataSelectScalar = {
    id?: boolean
    userId?: boolean
    avatar?: boolean
    avatarUrl?: boolean
    nickname?: boolean
    description?: boolean
    bio?: boolean
    birth?: boolean
    heightCm?: boolean
    weightKg?: boolean
    gender?: boolean
    sexuality?: boolean
    pronouns?: boolean
    city?: boolean
    transStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "avatar" | "avatarUrl" | "nickname" | "description" | "bio" | "birth" | "heightCm" | "weightKg" | "gender" | "sexuality" | "pronouns" | "city" | "transStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["userData"]>
  export type UserDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $UserDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserData"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      avatar: string | null
      avatarUrl: string | null
      nickname: string | null
      description: string | null
      bio: string | null
      birth: Date
      heightCm: number | null
      weightKg: number | null
      gender: $Enums.Gender | null
      sexuality: $Enums.Sexuality | null
      pronouns: string | null
      city: $Enums.City | null
      transStatus: $Enums.TransStatus | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userData"]>
    composites: {}
  }

  type UserDataGetPayload<S extends boolean | null | undefined | UserDataDefaultArgs> = $Result.GetResult<Prisma.$UserDataPayload, S>

  type UserDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDataCountAggregateInputType | true
    }

  export interface UserDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserData'], meta: { name: 'UserData' } }
    /**
     * Find zero or one UserData that matches the filter.
     * @param {UserDataFindUniqueArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDataFindUniqueArgs>(args: SelectSubset<T, UserDataFindUniqueArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDataFindUniqueOrThrowArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDataFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataFindFirstArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDataFindFirstArgs>(args?: SelectSubset<T, UserDataFindFirstArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataFindFirstOrThrowArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDataFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserData
     * const userData = await prisma.userData.findMany()
     * 
     * // Get first 10 UserData
     * const userData = await prisma.userData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDataWithIdOnly = await prisma.userData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDataFindManyArgs>(args?: SelectSubset<T, UserDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserData.
     * @param {UserDataCreateArgs} args - Arguments to create a UserData.
     * @example
     * // Create one UserData
     * const UserData = await prisma.userData.create({
     *   data: {
     *     // ... data to create a UserData
     *   }
     * })
     * 
     */
    create<T extends UserDataCreateArgs>(args: SelectSubset<T, UserDataCreateArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserData.
     * @param {UserDataCreateManyArgs} args - Arguments to create many UserData.
     * @example
     * // Create many UserData
     * const userData = await prisma.userData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDataCreateManyArgs>(args?: SelectSubset<T, UserDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserData and returns the data saved in the database.
     * @param {UserDataCreateManyAndReturnArgs} args - Arguments to create many UserData.
     * @example
     * // Create many UserData
     * const userData = await prisma.userData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserData and only return the `id`
     * const userDataWithIdOnly = await prisma.userData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDataCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserData.
     * @param {UserDataDeleteArgs} args - Arguments to delete one UserData.
     * @example
     * // Delete one UserData
     * const UserData = await prisma.userData.delete({
     *   where: {
     *     // ... filter to delete one UserData
     *   }
     * })
     * 
     */
    delete<T extends UserDataDeleteArgs>(args: SelectSubset<T, UserDataDeleteArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserData.
     * @param {UserDataUpdateArgs} args - Arguments to update one UserData.
     * @example
     * // Update one UserData
     * const userData = await prisma.userData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDataUpdateArgs>(args: SelectSubset<T, UserDataUpdateArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserData.
     * @param {UserDataDeleteManyArgs} args - Arguments to filter UserData to delete.
     * @example
     * // Delete a few UserData
     * const { count } = await prisma.userData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDataDeleteManyArgs>(args?: SelectSubset<T, UserDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserData
     * const userData = await prisma.userData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDataUpdateManyArgs>(args: SelectSubset<T, UserDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserData and returns the data updated in the database.
     * @param {UserDataUpdateManyAndReturnArgs} args - Arguments to update many UserData.
     * @example
     * // Update many UserData
     * const userData = await prisma.userData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserData and only return the `id`
     * const userDataWithIdOnly = await prisma.userData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDataUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserData.
     * @param {UserDataUpsertArgs} args - Arguments to update or create a UserData.
     * @example
     * // Update or create a UserData
     * const userData = await prisma.userData.upsert({
     *   create: {
     *     // ... data to create a UserData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserData we want to update
     *   }
     * })
     */
    upsert<T extends UserDataUpsertArgs>(args: SelectSubset<T, UserDataUpsertArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataCountArgs} args - Arguments to filter UserData to count.
     * @example
     * // Count the number of UserData
     * const count = await prisma.userData.count({
     *   where: {
     *     // ... the filter for the UserData we want to count
     *   }
     * })
    **/
    count<T extends UserDataCountArgs>(
      args?: Subset<T, UserDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserDataAggregateArgs>(args: Subset<T, UserDataAggregateArgs>): Prisma.PrismaPromise<GetUserDataAggregateType<T>>

    /**
     * Group by UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDataGroupByArgs['orderBy'] }
        : { orderBy?: UserDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserData model
   */
  readonly fields: UserDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserData model
   */
  interface UserDataFieldRefs {
    readonly id: FieldRef<"UserData", 'Int'>
    readonly userId: FieldRef<"UserData", 'String'>
    readonly avatar: FieldRef<"UserData", 'String'>
    readonly avatarUrl: FieldRef<"UserData", 'String'>
    readonly nickname: FieldRef<"UserData", 'String'>
    readonly description: FieldRef<"UserData", 'String'>
    readonly bio: FieldRef<"UserData", 'String'>
    readonly birth: FieldRef<"UserData", 'DateTime'>
    readonly heightCm: FieldRef<"UserData", 'Int'>
    readonly weightKg: FieldRef<"UserData", 'Int'>
    readonly gender: FieldRef<"UserData", 'Gender'>
    readonly sexuality: FieldRef<"UserData", 'Sexuality'>
    readonly pronouns: FieldRef<"UserData", 'String'>
    readonly city: FieldRef<"UserData", 'City'>
    readonly transStatus: FieldRef<"UserData", 'TransStatus'>
    readonly createdAt: FieldRef<"UserData", 'DateTime'>
    readonly updatedAt: FieldRef<"UserData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserData findUnique
   */
  export type UserDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData findUniqueOrThrow
   */
  export type UserDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData findFirst
   */
  export type UserDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserData.
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserData.
     */
    distinct?: UserDataScalarFieldEnum | UserDataScalarFieldEnum[]
  }

  /**
   * UserData findFirstOrThrow
   */
  export type UserDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserData.
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserData.
     */
    distinct?: UserDataScalarFieldEnum | UserDataScalarFieldEnum[]
  }

  /**
   * UserData findMany
   */
  export type UserDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserData.
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserData.
     */
    distinct?: UserDataScalarFieldEnum | UserDataScalarFieldEnum[]
  }

  /**
   * UserData create
   */
  export type UserDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * The data needed to create a UserData.
     */
    data: XOR<UserDataCreateInput, UserDataUncheckedCreateInput>
  }

  /**
   * UserData createMany
   */
  export type UserDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserData.
     */
    data: UserDataCreateManyInput | UserDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserData createManyAndReturn
   */
  export type UserDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * The data used to create many UserData.
     */
    data: UserDataCreateManyInput | UserDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserData update
   */
  export type UserDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * The data needed to update a UserData.
     */
    data: XOR<UserDataUpdateInput, UserDataUncheckedUpdateInput>
    /**
     * Choose, which UserData to update.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData updateMany
   */
  export type UserDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserData.
     */
    data: XOR<UserDataUpdateManyMutationInput, UserDataUncheckedUpdateManyInput>
    /**
     * Filter which UserData to update
     */
    where?: UserDataWhereInput
    /**
     * Limit how many UserData to update.
     */
    limit?: number
  }

  /**
   * UserData updateManyAndReturn
   */
  export type UserDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * The data used to update UserData.
     */
    data: XOR<UserDataUpdateManyMutationInput, UserDataUncheckedUpdateManyInput>
    /**
     * Filter which UserData to update
     */
    where?: UserDataWhereInput
    /**
     * Limit how many UserData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserData upsert
   */
  export type UserDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * The filter to search for the UserData to update in case it exists.
     */
    where: UserDataWhereUniqueInput
    /**
     * In case the UserData found by the `where` argument doesn't exist, create a new UserData with this data.
     */
    create: XOR<UserDataCreateInput, UserDataUncheckedCreateInput>
    /**
     * In case the UserData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDataUpdateInput, UserDataUncheckedUpdateInput>
  }

  /**
   * UserData delete
   */
  export type UserDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter which UserData to delete.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData deleteMany
   */
  export type UserDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserData to delete
     */
    where?: UserDataWhereInput
    /**
     * Limit how many UserData to delete.
     */
    limit?: number
  }

  /**
   * UserData without action
   */
  export type UserDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
  }


  /**
   * Model UserPreference
   */

  export type AggregateUserPreference = {
    _count: UserPreferenceCountAggregateOutputType | null
    _avg: UserPreferenceAvgAggregateOutputType | null
    _sum: UserPreferenceSumAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  export type UserPreferenceAvgAggregateOutputType = {
    id: number | null
    minAge: number | null
    maxAge: number | null
    minHeightCm: number | null
    maxHeightCm: number | null
    maxDistanceKm: number | null
  }

  export type UserPreferenceSumAggregateOutputType = {
    id: number | null
    minAge: number | null
    maxAge: number | null
    minHeightCm: number | null
    maxHeightCm: number | null
    maxDistanceKm: number | null
  }

  export type UserPreferenceMinAggregateOutputType = {
    id: number | null
    userId: string | null
    minAge: number | null
    maxAge: number | null
    minHeightCm: number | null
    maxHeightCm: number | null
    maxDistanceKm: number | null
    verifiedOnly: boolean | null
    locationRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferenceMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    minAge: number | null
    maxAge: number | null
    minHeightCm: number | null
    maxHeightCm: number | null
    maxDistanceKm: number | null
    verifiedOnly: boolean | null
    locationRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferenceCountAggregateOutputType = {
    id: number
    userId: number
    minAge: number
    maxAge: number
    minHeightCm: number
    maxHeightCm: number
    maxDistanceKm: number
    verifiedOnly: number
    locationRequired: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPreferenceAvgAggregateInputType = {
    id?: true
    minAge?: true
    maxAge?: true
    minHeightCm?: true
    maxHeightCm?: true
    maxDistanceKm?: true
  }

  export type UserPreferenceSumAggregateInputType = {
    id?: true
    minAge?: true
    maxAge?: true
    minHeightCm?: true
    maxHeightCm?: true
    maxDistanceKm?: true
  }

  export type UserPreferenceMinAggregateInputType = {
    id?: true
    userId?: true
    minAge?: true
    maxAge?: true
    minHeightCm?: true
    maxHeightCm?: true
    maxDistanceKm?: true
    verifiedOnly?: true
    locationRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferenceMaxAggregateInputType = {
    id?: true
    userId?: true
    minAge?: true
    maxAge?: true
    minHeightCm?: true
    maxHeightCm?: true
    maxDistanceKm?: true
    verifiedOnly?: true
    locationRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferenceCountAggregateInputType = {
    id?: true
    userId?: true
    minAge?: true
    maxAge?: true
    minHeightCm?: true
    maxHeightCm?: true
    maxDistanceKm?: true
    verifiedOnly?: true
    locationRequired?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreference to aggregate.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type GetUserPreferenceAggregateType<T extends UserPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreference[P]>
      : GetScalarType<T[P], AggregateUserPreference[P]>
  }




  export type UserPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferenceWhereInput
    orderBy?: UserPreferenceOrderByWithAggregationInput | UserPreferenceOrderByWithAggregationInput[]
    by: UserPreferenceScalarFieldEnum[] | UserPreferenceScalarFieldEnum
    having?: UserPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferenceCountAggregateInputType | true
    _avg?: UserPreferenceAvgAggregateInputType
    _sum?: UserPreferenceSumAggregateInputType
    _min?: UserPreferenceMinAggregateInputType
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type UserPreferenceGroupByOutputType = {
    id: number
    userId: string
    minAge: number | null
    maxAge: number | null
    minHeightCm: number | null
    maxHeightCm: number | null
    maxDistanceKm: number | null
    verifiedOnly: boolean
    locationRequired: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserPreferenceCountAggregateOutputType | null
    _avg: UserPreferenceAvgAggregateOutputType | null
    _sum: UserPreferenceSumAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  type GetUserPreferenceGroupByPayload<T extends UserPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    minAge?: boolean
    maxAge?: boolean
    minHeightCm?: boolean
    maxHeightCm?: boolean
    maxDistanceKm?: boolean
    verifiedOnly?: boolean
    locationRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    minAge?: boolean
    maxAge?: boolean
    minHeightCm?: boolean
    maxHeightCm?: boolean
    maxDistanceKm?: boolean
    verifiedOnly?: boolean
    locationRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    minAge?: boolean
    maxAge?: boolean
    minHeightCm?: boolean
    maxHeightCm?: boolean
    maxDistanceKm?: boolean
    verifiedOnly?: boolean
    locationRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectScalar = {
    id?: boolean
    userId?: boolean
    minAge?: boolean
    maxAge?: boolean
    minHeightCm?: boolean
    maxHeightCm?: boolean
    maxDistanceKm?: boolean
    verifiedOnly?: boolean
    locationRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "minAge" | "maxAge" | "minHeightCm" | "maxHeightCm" | "maxDistanceKm" | "verifiedOnly" | "locationRequired" | "createdAt" | "updatedAt", ExtArgs["result"]["userPreference"]>
  export type UserPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $UserPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreference"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      minAge: number | null
      maxAge: number | null
      minHeightCm: number | null
      maxHeightCm: number | null
      maxDistanceKm: number | null
      verifiedOnly: boolean
      locationRequired: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPreference"]>
    composites: {}
  }

  type UserPreferenceGetPayload<S extends boolean | null | undefined | UserPreferenceDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencePayload, S>

  type UserPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferenceCountAggregateInputType | true
    }

  export interface UserPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreference'], meta: { name: 'UserPreference' } }
    /**
     * Find zero or one UserPreference that matches the filter.
     * @param {UserPreferenceFindUniqueArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferenceFindUniqueArgs>(args: SelectSubset<T, UserPreferenceFindUniqueArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferenceFindFirstArgs>(args?: SelectSubset<T, UserPreferenceFindFirstArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreference.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferenceFindManyArgs>(args?: SelectSubset<T, UserPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreference.
     * @param {UserPreferenceCreateArgs} args - Arguments to create a UserPreference.
     * @example
     * // Create one UserPreference
     * const UserPreference = await prisma.userPreference.create({
     *   data: {
     *     // ... data to create a UserPreference
     *   }
     * })
     * 
     */
    create<T extends UserPreferenceCreateArgs>(args: SelectSubset<T, UserPreferenceCreateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferenceCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferenceCreateManyArgs>(args?: SelectSubset<T, UserPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreference.
     * @param {UserPreferenceDeleteArgs} args - Arguments to delete one UserPreference.
     * @example
     * // Delete one UserPreference
     * const UserPreference = await prisma.userPreference.delete({
     *   where: {
     *     // ... filter to delete one UserPreference
     *   }
     * })
     * 
     */
    delete<T extends UserPreferenceDeleteArgs>(args: SelectSubset<T, UserPreferenceDeleteArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreference.
     * @param {UserPreferenceUpdateArgs} args - Arguments to update one UserPreference.
     * @example
     * // Update one UserPreference
     * const userPreference = await prisma.userPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferenceUpdateArgs>(args: SelectSubset<T, UserPreferenceUpdateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferenceDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferenceDeleteManyArgs>(args?: SelectSubset<T, UserPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferenceUpdateManyArgs>(args: SelectSubset<T, UserPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferenceUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreference.
     * @param {UserPreferenceUpsertArgs} args - Arguments to update or create a UserPreference.
     * @example
     * // Update or create a UserPreference
     * const userPreference = await prisma.userPreference.upsert({
     *   create: {
     *     // ... data to create a UserPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferenceUpsertArgs>(args: SelectSubset<T, UserPreferenceUpsertArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreference.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferenceCountArgs>(
      args?: Subset<T, UserPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPreferenceAggregateArgs>(args: Subset<T, UserPreferenceAggregateArgs>): Prisma.PrismaPromise<GetUserPreferenceAggregateType<T>>

    /**
     * Group by UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreference model
   */
  readonly fields: UserPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPreference model
   */
  interface UserPreferenceFieldRefs {
    readonly id: FieldRef<"UserPreference", 'Int'>
    readonly userId: FieldRef<"UserPreference", 'String'>
    readonly minAge: FieldRef<"UserPreference", 'Int'>
    readonly maxAge: FieldRef<"UserPreference", 'Int'>
    readonly minHeightCm: FieldRef<"UserPreference", 'Int'>
    readonly maxHeightCm: FieldRef<"UserPreference", 'Int'>
    readonly maxDistanceKm: FieldRef<"UserPreference", 'Int'>
    readonly verifiedOnly: FieldRef<"UserPreference", 'Boolean'>
    readonly locationRequired: FieldRef<"UserPreference", 'Boolean'>
    readonly createdAt: FieldRef<"UserPreference", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPreference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreference findUnique
   */
  export type UserPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findUniqueOrThrow
   */
  export type UserPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findFirst
   */
  export type UserPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findFirstOrThrow
   */
  export type UserPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findMany
   */
  export type UserPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference create
   */
  export type UserPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreference.
     */
    data: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
  }

  /**
   * UserPreference createMany
   */
  export type UserPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreference createManyAndReturn
   */
  export type UserPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference update
   */
  export type UserPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreference.
     */
    data: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
    /**
     * Choose, which UserPreference to update.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference updateMany
   */
  export type UserPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreference updateManyAndReturn
   */
  export type UserPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference upsert
   */
  export type UserPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreference to update in case it exists.
     */
    where: UserPreferenceWhereUniqueInput
    /**
     * In case the UserPreference found by the `where` argument doesn't exist, create a new UserPreference with this data.
     */
    create: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
    /**
     * In case the UserPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
  }

  /**
   * UserPreference delete
   */
  export type UserPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter which UserPreference to delete.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference deleteMany
   */
  export type UserPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreference without action
   */
  export type UserPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
  }


  /**
   * Model UserLookingFor
   */

  export type AggregateUserLookingFor = {
    _count: UserLookingForCountAggregateOutputType | null
    _avg: UserLookingForAvgAggregateOutputType | null
    _sum: UserLookingForSumAggregateOutputType | null
    _min: UserLookingForMinAggregateOutputType | null
    _max: UserLookingForMaxAggregateOutputType | null
  }

  export type UserLookingForAvgAggregateOutputType = {
    id: number | null
  }

  export type UserLookingForSumAggregateOutputType = {
    id: number | null
  }

  export type UserLookingForMinAggregateOutputType = {
    id: number | null
    userId: string | null
    value: $Enums.LookingFor | null
  }

  export type UserLookingForMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    value: $Enums.LookingFor | null
  }

  export type UserLookingForCountAggregateOutputType = {
    id: number
    userId: number
    value: number
    _all: number
  }


  export type UserLookingForAvgAggregateInputType = {
    id?: true
  }

  export type UserLookingForSumAggregateInputType = {
    id?: true
  }

  export type UserLookingForMinAggregateInputType = {
    id?: true
    userId?: true
    value?: true
  }

  export type UserLookingForMaxAggregateInputType = {
    id?: true
    userId?: true
    value?: true
  }

  export type UserLookingForCountAggregateInputType = {
    id?: true
    userId?: true
    value?: true
    _all?: true
  }

  export type UserLookingForAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLookingFor to aggregate.
     */
    where?: UserLookingForWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLookingFors to fetch.
     */
    orderBy?: UserLookingForOrderByWithRelationInput | UserLookingForOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLookingForWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLookingFors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLookingFors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLookingFors
    **/
    _count?: true | UserLookingForCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLookingForAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLookingForSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLookingForMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLookingForMaxAggregateInputType
  }

  export type GetUserLookingForAggregateType<T extends UserLookingForAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLookingFor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLookingFor[P]>
      : GetScalarType<T[P], AggregateUserLookingFor[P]>
  }




  export type UserLookingForGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLookingForWhereInput
    orderBy?: UserLookingForOrderByWithAggregationInput | UserLookingForOrderByWithAggregationInput[]
    by: UserLookingForScalarFieldEnum[] | UserLookingForScalarFieldEnum
    having?: UserLookingForScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLookingForCountAggregateInputType | true
    _avg?: UserLookingForAvgAggregateInputType
    _sum?: UserLookingForSumAggregateInputType
    _min?: UserLookingForMinAggregateInputType
    _max?: UserLookingForMaxAggregateInputType
  }

  export type UserLookingForGroupByOutputType = {
    id: number
    userId: string
    value: $Enums.LookingFor
    _count: UserLookingForCountAggregateOutputType | null
    _avg: UserLookingForAvgAggregateOutputType | null
    _sum: UserLookingForSumAggregateOutputType | null
    _min: UserLookingForMinAggregateOutputType | null
    _max: UserLookingForMaxAggregateOutputType | null
  }

  type GetUserLookingForGroupByPayload<T extends UserLookingForGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLookingForGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLookingForGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLookingForGroupByOutputType[P]>
            : GetScalarType<T[P], UserLookingForGroupByOutputType[P]>
        }
      >
    >


  export type UserLookingForSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    value?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLookingFor"]>

  export type UserLookingForSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    value?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLookingFor"]>

  export type UserLookingForSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    value?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLookingFor"]>

  export type UserLookingForSelectScalar = {
    id?: boolean
    userId?: boolean
    value?: boolean
  }

  export type UserLookingForOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "value", ExtArgs["result"]["userLookingFor"]>
  export type UserLookingForInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserLookingForIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserLookingForIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $UserLookingForPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLookingFor"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      value: $Enums.LookingFor
    }, ExtArgs["result"]["userLookingFor"]>
    composites: {}
  }

  type UserLookingForGetPayload<S extends boolean | null | undefined | UserLookingForDefaultArgs> = $Result.GetResult<Prisma.$UserLookingForPayload, S>

  type UserLookingForCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLookingForFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLookingForCountAggregateInputType | true
    }

  export interface UserLookingForDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLookingFor'], meta: { name: 'UserLookingFor' } }
    /**
     * Find zero or one UserLookingFor that matches the filter.
     * @param {UserLookingForFindUniqueArgs} args - Arguments to find a UserLookingFor
     * @example
     * // Get one UserLookingFor
     * const userLookingFor = await prisma.userLookingFor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLookingForFindUniqueArgs>(args: SelectSubset<T, UserLookingForFindUniqueArgs<ExtArgs>>): Prisma__UserLookingForClient<$Result.GetResult<Prisma.$UserLookingForPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLookingFor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLookingForFindUniqueOrThrowArgs} args - Arguments to find a UserLookingFor
     * @example
     * // Get one UserLookingFor
     * const userLookingFor = await prisma.userLookingFor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLookingForFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLookingForFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLookingForClient<$Result.GetResult<Prisma.$UserLookingForPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLookingFor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLookingForFindFirstArgs} args - Arguments to find a UserLookingFor
     * @example
     * // Get one UserLookingFor
     * const userLookingFor = await prisma.userLookingFor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLookingForFindFirstArgs>(args?: SelectSubset<T, UserLookingForFindFirstArgs<ExtArgs>>): Prisma__UserLookingForClient<$Result.GetResult<Prisma.$UserLookingForPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLookingFor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLookingForFindFirstOrThrowArgs} args - Arguments to find a UserLookingFor
     * @example
     * // Get one UserLookingFor
     * const userLookingFor = await prisma.userLookingFor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLookingForFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLookingForFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLookingForClient<$Result.GetResult<Prisma.$UserLookingForPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLookingFors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLookingForFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLookingFors
     * const userLookingFors = await prisma.userLookingFor.findMany()
     * 
     * // Get first 10 UserLookingFors
     * const userLookingFors = await prisma.userLookingFor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLookingForWithIdOnly = await prisma.userLookingFor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLookingForFindManyArgs>(args?: SelectSubset<T, UserLookingForFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLookingForPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLookingFor.
     * @param {UserLookingForCreateArgs} args - Arguments to create a UserLookingFor.
     * @example
     * // Create one UserLookingFor
     * const UserLookingFor = await prisma.userLookingFor.create({
     *   data: {
     *     // ... data to create a UserLookingFor
     *   }
     * })
     * 
     */
    create<T extends UserLookingForCreateArgs>(args: SelectSubset<T, UserLookingForCreateArgs<ExtArgs>>): Prisma__UserLookingForClient<$Result.GetResult<Prisma.$UserLookingForPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLookingFors.
     * @param {UserLookingForCreateManyArgs} args - Arguments to create many UserLookingFors.
     * @example
     * // Create many UserLookingFors
     * const userLookingFor = await prisma.userLookingFor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLookingForCreateManyArgs>(args?: SelectSubset<T, UserLookingForCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLookingFors and returns the data saved in the database.
     * @param {UserLookingForCreateManyAndReturnArgs} args - Arguments to create many UserLookingFors.
     * @example
     * // Create many UserLookingFors
     * const userLookingFor = await prisma.userLookingFor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLookingFors and only return the `id`
     * const userLookingForWithIdOnly = await prisma.userLookingFor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLookingForCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLookingForCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLookingForPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLookingFor.
     * @param {UserLookingForDeleteArgs} args - Arguments to delete one UserLookingFor.
     * @example
     * // Delete one UserLookingFor
     * const UserLookingFor = await prisma.userLookingFor.delete({
     *   where: {
     *     // ... filter to delete one UserLookingFor
     *   }
     * })
     * 
     */
    delete<T extends UserLookingForDeleteArgs>(args: SelectSubset<T, UserLookingForDeleteArgs<ExtArgs>>): Prisma__UserLookingForClient<$Result.GetResult<Prisma.$UserLookingForPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLookingFor.
     * @param {UserLookingForUpdateArgs} args - Arguments to update one UserLookingFor.
     * @example
     * // Update one UserLookingFor
     * const userLookingFor = await prisma.userLookingFor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLookingForUpdateArgs>(args: SelectSubset<T, UserLookingForUpdateArgs<ExtArgs>>): Prisma__UserLookingForClient<$Result.GetResult<Prisma.$UserLookingForPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLookingFors.
     * @param {UserLookingForDeleteManyArgs} args - Arguments to filter UserLookingFors to delete.
     * @example
     * // Delete a few UserLookingFors
     * const { count } = await prisma.userLookingFor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLookingForDeleteManyArgs>(args?: SelectSubset<T, UserLookingForDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLookingFors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLookingForUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLookingFors
     * const userLookingFor = await prisma.userLookingFor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLookingForUpdateManyArgs>(args: SelectSubset<T, UserLookingForUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLookingFors and returns the data updated in the database.
     * @param {UserLookingForUpdateManyAndReturnArgs} args - Arguments to update many UserLookingFors.
     * @example
     * // Update many UserLookingFors
     * const userLookingFor = await prisma.userLookingFor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLookingFors and only return the `id`
     * const userLookingForWithIdOnly = await prisma.userLookingFor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserLookingForUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLookingForUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLookingForPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLookingFor.
     * @param {UserLookingForUpsertArgs} args - Arguments to update or create a UserLookingFor.
     * @example
     * // Update or create a UserLookingFor
     * const userLookingFor = await prisma.userLookingFor.upsert({
     *   create: {
     *     // ... data to create a UserLookingFor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLookingFor we want to update
     *   }
     * })
     */
    upsert<T extends UserLookingForUpsertArgs>(args: SelectSubset<T, UserLookingForUpsertArgs<ExtArgs>>): Prisma__UserLookingForClient<$Result.GetResult<Prisma.$UserLookingForPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLookingFors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLookingForCountArgs} args - Arguments to filter UserLookingFors to count.
     * @example
     * // Count the number of UserLookingFors
     * const count = await prisma.userLookingFor.count({
     *   where: {
     *     // ... the filter for the UserLookingFors we want to count
     *   }
     * })
    **/
    count<T extends UserLookingForCountArgs>(
      args?: Subset<T, UserLookingForCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLookingForCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLookingFor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLookingForAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLookingForAggregateArgs>(args: Subset<T, UserLookingForAggregateArgs>): Prisma.PrismaPromise<GetUserLookingForAggregateType<T>>

    /**
     * Group by UserLookingFor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLookingForGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLookingForGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLookingForGroupByArgs['orderBy'] }
        : { orderBy?: UserLookingForGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLookingForGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLookingForGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLookingFor model
   */
  readonly fields: UserLookingForFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLookingFor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLookingForClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserLookingFor model
   */
  interface UserLookingForFieldRefs {
    readonly id: FieldRef<"UserLookingFor", 'Int'>
    readonly userId: FieldRef<"UserLookingFor", 'String'>
    readonly value: FieldRef<"UserLookingFor", 'LookingFor'>
  }
    

  // Custom InputTypes
  /**
   * UserLookingFor findUnique
   */
  export type UserLookingForFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLookingFor
     */
    select?: UserLookingForSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLookingFor
     */
    omit?: UserLookingForOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLookingForInclude<ExtArgs> | null
    /**
     * Filter, which UserLookingFor to fetch.
     */
    where: UserLookingForWhereUniqueInput
  }

  /**
   * UserLookingFor findUniqueOrThrow
   */
  export type UserLookingForFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLookingFor
     */
    select?: UserLookingForSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLookingFor
     */
    omit?: UserLookingForOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLookingForInclude<ExtArgs> | null
    /**
     * Filter, which UserLookingFor to fetch.
     */
    where: UserLookingForWhereUniqueInput
  }

  /**
   * UserLookingFor findFirst
   */
  export type UserLookingForFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLookingFor
     */
    select?: UserLookingForSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLookingFor
     */
    omit?: UserLookingForOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLookingForInclude<ExtArgs> | null
    /**
     * Filter, which UserLookingFor to fetch.
     */
    where?: UserLookingForWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLookingFors to fetch.
     */
    orderBy?: UserLookingForOrderByWithRelationInput | UserLookingForOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLookingFors.
     */
    cursor?: UserLookingForWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLookingFors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLookingFors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLookingFors.
     */
    distinct?: UserLookingForScalarFieldEnum | UserLookingForScalarFieldEnum[]
  }

  /**
   * UserLookingFor findFirstOrThrow
   */
  export type UserLookingForFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLookingFor
     */
    select?: UserLookingForSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLookingFor
     */
    omit?: UserLookingForOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLookingForInclude<ExtArgs> | null
    /**
     * Filter, which UserLookingFor to fetch.
     */
    where?: UserLookingForWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLookingFors to fetch.
     */
    orderBy?: UserLookingForOrderByWithRelationInput | UserLookingForOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLookingFors.
     */
    cursor?: UserLookingForWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLookingFors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLookingFors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLookingFors.
     */
    distinct?: UserLookingForScalarFieldEnum | UserLookingForScalarFieldEnum[]
  }

  /**
   * UserLookingFor findMany
   */
  export type UserLookingForFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLookingFor
     */
    select?: UserLookingForSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLookingFor
     */
    omit?: UserLookingForOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLookingForInclude<ExtArgs> | null
    /**
     * Filter, which UserLookingFors to fetch.
     */
    where?: UserLookingForWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLookingFors to fetch.
     */
    orderBy?: UserLookingForOrderByWithRelationInput | UserLookingForOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLookingFors.
     */
    cursor?: UserLookingForWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLookingFors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLookingFors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLookingFors.
     */
    distinct?: UserLookingForScalarFieldEnum | UserLookingForScalarFieldEnum[]
  }

  /**
   * UserLookingFor create
   */
  export type UserLookingForCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLookingFor
     */
    select?: UserLookingForSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLookingFor
     */
    omit?: UserLookingForOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLookingForInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLookingFor.
     */
    data: XOR<UserLookingForCreateInput, UserLookingForUncheckedCreateInput>
  }

  /**
   * UserLookingFor createMany
   */
  export type UserLookingForCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLookingFors.
     */
    data: UserLookingForCreateManyInput | UserLookingForCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLookingFor createManyAndReturn
   */
  export type UserLookingForCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLookingFor
     */
    select?: UserLookingForSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLookingFor
     */
    omit?: UserLookingForOmit<ExtArgs> | null
    /**
     * The data used to create many UserLookingFors.
     */
    data: UserLookingForCreateManyInput | UserLookingForCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLookingForIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLookingFor update
   */
  export type UserLookingForUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLookingFor
     */
    select?: UserLookingForSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLookingFor
     */
    omit?: UserLookingForOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLookingForInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLookingFor.
     */
    data: XOR<UserLookingForUpdateInput, UserLookingForUncheckedUpdateInput>
    /**
     * Choose, which UserLookingFor to update.
     */
    where: UserLookingForWhereUniqueInput
  }

  /**
   * UserLookingFor updateMany
   */
  export type UserLookingForUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLookingFors.
     */
    data: XOR<UserLookingForUpdateManyMutationInput, UserLookingForUncheckedUpdateManyInput>
    /**
     * Filter which UserLookingFors to update
     */
    where?: UserLookingForWhereInput
    /**
     * Limit how many UserLookingFors to update.
     */
    limit?: number
  }

  /**
   * UserLookingFor updateManyAndReturn
   */
  export type UserLookingForUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLookingFor
     */
    select?: UserLookingForSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLookingFor
     */
    omit?: UserLookingForOmit<ExtArgs> | null
    /**
     * The data used to update UserLookingFors.
     */
    data: XOR<UserLookingForUpdateManyMutationInput, UserLookingForUncheckedUpdateManyInput>
    /**
     * Filter which UserLookingFors to update
     */
    where?: UserLookingForWhereInput
    /**
     * Limit how many UserLookingFors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLookingForIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLookingFor upsert
   */
  export type UserLookingForUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLookingFor
     */
    select?: UserLookingForSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLookingFor
     */
    omit?: UserLookingForOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLookingForInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLookingFor to update in case it exists.
     */
    where: UserLookingForWhereUniqueInput
    /**
     * In case the UserLookingFor found by the `where` argument doesn't exist, create a new UserLookingFor with this data.
     */
    create: XOR<UserLookingForCreateInput, UserLookingForUncheckedCreateInput>
    /**
     * In case the UserLookingFor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLookingForUpdateInput, UserLookingForUncheckedUpdateInput>
  }

  /**
   * UserLookingFor delete
   */
  export type UserLookingForDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLookingFor
     */
    select?: UserLookingForSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLookingFor
     */
    omit?: UserLookingForOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLookingForInclude<ExtArgs> | null
    /**
     * Filter which UserLookingFor to delete.
     */
    where: UserLookingForWhereUniqueInput
  }

  /**
   * UserLookingFor deleteMany
   */
  export type UserLookingForDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLookingFors to delete
     */
    where?: UserLookingForWhereInput
    /**
     * Limit how many UserLookingFors to delete.
     */
    limit?: number
  }

  /**
   * UserLookingFor without action
   */
  export type UserLookingForDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLookingFor
     */
    select?: UserLookingForSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLookingFor
     */
    omit?: UserLookingForOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLookingForInclude<ExtArgs> | null
  }


  /**
   * Model UserGenderInterest
   */

  export type AggregateUserGenderInterest = {
    _count: UserGenderInterestCountAggregateOutputType | null
    _avg: UserGenderInterestAvgAggregateOutputType | null
    _sum: UserGenderInterestSumAggregateOutputType | null
    _min: UserGenderInterestMinAggregateOutputType | null
    _max: UserGenderInterestMaxAggregateOutputType | null
  }

  export type UserGenderInterestAvgAggregateOutputType = {
    id: number | null
  }

  export type UserGenderInterestSumAggregateOutputType = {
    id: number | null
  }

  export type UserGenderInterestMinAggregateOutputType = {
    id: number | null
    userId: string | null
    value: $Enums.GenderInterest | null
  }

  export type UserGenderInterestMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    value: $Enums.GenderInterest | null
  }

  export type UserGenderInterestCountAggregateOutputType = {
    id: number
    userId: number
    value: number
    _all: number
  }


  export type UserGenderInterestAvgAggregateInputType = {
    id?: true
  }

  export type UserGenderInterestSumAggregateInputType = {
    id?: true
  }

  export type UserGenderInterestMinAggregateInputType = {
    id?: true
    userId?: true
    value?: true
  }

  export type UserGenderInterestMaxAggregateInputType = {
    id?: true
    userId?: true
    value?: true
  }

  export type UserGenderInterestCountAggregateInputType = {
    id?: true
    userId?: true
    value?: true
    _all?: true
  }

  export type UserGenderInterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGenderInterest to aggregate.
     */
    where?: UserGenderInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGenderInterests to fetch.
     */
    orderBy?: UserGenderInterestOrderByWithRelationInput | UserGenderInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGenderInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGenderInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGenderInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGenderInterests
    **/
    _count?: true | UserGenderInterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserGenderInterestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserGenderInterestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGenderInterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGenderInterestMaxAggregateInputType
  }

  export type GetUserGenderInterestAggregateType<T extends UserGenderInterestAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGenderInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGenderInterest[P]>
      : GetScalarType<T[P], AggregateUserGenderInterest[P]>
  }




  export type UserGenderInterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGenderInterestWhereInput
    orderBy?: UserGenderInterestOrderByWithAggregationInput | UserGenderInterestOrderByWithAggregationInput[]
    by: UserGenderInterestScalarFieldEnum[] | UserGenderInterestScalarFieldEnum
    having?: UserGenderInterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGenderInterestCountAggregateInputType | true
    _avg?: UserGenderInterestAvgAggregateInputType
    _sum?: UserGenderInterestSumAggregateInputType
    _min?: UserGenderInterestMinAggregateInputType
    _max?: UserGenderInterestMaxAggregateInputType
  }

  export type UserGenderInterestGroupByOutputType = {
    id: number
    userId: string
    value: $Enums.GenderInterest
    _count: UserGenderInterestCountAggregateOutputType | null
    _avg: UserGenderInterestAvgAggregateOutputType | null
    _sum: UserGenderInterestSumAggregateOutputType | null
    _min: UserGenderInterestMinAggregateOutputType | null
    _max: UserGenderInterestMaxAggregateOutputType | null
  }

  type GetUserGenderInterestGroupByPayload<T extends UserGenderInterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGenderInterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGenderInterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGenderInterestGroupByOutputType[P]>
            : GetScalarType<T[P], UserGenderInterestGroupByOutputType[P]>
        }
      >
    >


  export type UserGenderInterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    value?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGenderInterest"]>

  export type UserGenderInterestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    value?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGenderInterest"]>

  export type UserGenderInterestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    value?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGenderInterest"]>

  export type UserGenderInterestSelectScalar = {
    id?: boolean
    userId?: boolean
    value?: boolean
  }

  export type UserGenderInterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "value", ExtArgs["result"]["userGenderInterest"]>
  export type UserGenderInterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserGenderInterestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserGenderInterestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $UserGenderInterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGenderInterest"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      value: $Enums.GenderInterest
    }, ExtArgs["result"]["userGenderInterest"]>
    composites: {}
  }

  type UserGenderInterestGetPayload<S extends boolean | null | undefined | UserGenderInterestDefaultArgs> = $Result.GetResult<Prisma.$UserGenderInterestPayload, S>

  type UserGenderInterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGenderInterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGenderInterestCountAggregateInputType | true
    }

  export interface UserGenderInterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGenderInterest'], meta: { name: 'UserGenderInterest' } }
    /**
     * Find zero or one UserGenderInterest that matches the filter.
     * @param {UserGenderInterestFindUniqueArgs} args - Arguments to find a UserGenderInterest
     * @example
     * // Get one UserGenderInterest
     * const userGenderInterest = await prisma.userGenderInterest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGenderInterestFindUniqueArgs>(args: SelectSubset<T, UserGenderInterestFindUniqueArgs<ExtArgs>>): Prisma__UserGenderInterestClient<$Result.GetResult<Prisma.$UserGenderInterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGenderInterest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGenderInterestFindUniqueOrThrowArgs} args - Arguments to find a UserGenderInterest
     * @example
     * // Get one UserGenderInterest
     * const userGenderInterest = await prisma.userGenderInterest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGenderInterestFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGenderInterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGenderInterestClient<$Result.GetResult<Prisma.$UserGenderInterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGenderInterest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGenderInterestFindFirstArgs} args - Arguments to find a UserGenderInterest
     * @example
     * // Get one UserGenderInterest
     * const userGenderInterest = await prisma.userGenderInterest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGenderInterestFindFirstArgs>(args?: SelectSubset<T, UserGenderInterestFindFirstArgs<ExtArgs>>): Prisma__UserGenderInterestClient<$Result.GetResult<Prisma.$UserGenderInterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGenderInterest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGenderInterestFindFirstOrThrowArgs} args - Arguments to find a UserGenderInterest
     * @example
     * // Get one UserGenderInterest
     * const userGenderInterest = await prisma.userGenderInterest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGenderInterestFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGenderInterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGenderInterestClient<$Result.GetResult<Prisma.$UserGenderInterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGenderInterests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGenderInterestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGenderInterests
     * const userGenderInterests = await prisma.userGenderInterest.findMany()
     * 
     * // Get first 10 UserGenderInterests
     * const userGenderInterests = await prisma.userGenderInterest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGenderInterestWithIdOnly = await prisma.userGenderInterest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGenderInterestFindManyArgs>(args?: SelectSubset<T, UserGenderInterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGenderInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGenderInterest.
     * @param {UserGenderInterestCreateArgs} args - Arguments to create a UserGenderInterest.
     * @example
     * // Create one UserGenderInterest
     * const UserGenderInterest = await prisma.userGenderInterest.create({
     *   data: {
     *     // ... data to create a UserGenderInterest
     *   }
     * })
     * 
     */
    create<T extends UserGenderInterestCreateArgs>(args: SelectSubset<T, UserGenderInterestCreateArgs<ExtArgs>>): Prisma__UserGenderInterestClient<$Result.GetResult<Prisma.$UserGenderInterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGenderInterests.
     * @param {UserGenderInterestCreateManyArgs} args - Arguments to create many UserGenderInterests.
     * @example
     * // Create many UserGenderInterests
     * const userGenderInterest = await prisma.userGenderInterest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGenderInterestCreateManyArgs>(args?: SelectSubset<T, UserGenderInterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGenderInterests and returns the data saved in the database.
     * @param {UserGenderInterestCreateManyAndReturnArgs} args - Arguments to create many UserGenderInterests.
     * @example
     * // Create many UserGenderInterests
     * const userGenderInterest = await prisma.userGenderInterest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGenderInterests and only return the `id`
     * const userGenderInterestWithIdOnly = await prisma.userGenderInterest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGenderInterestCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGenderInterestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGenderInterestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGenderInterest.
     * @param {UserGenderInterestDeleteArgs} args - Arguments to delete one UserGenderInterest.
     * @example
     * // Delete one UserGenderInterest
     * const UserGenderInterest = await prisma.userGenderInterest.delete({
     *   where: {
     *     // ... filter to delete one UserGenderInterest
     *   }
     * })
     * 
     */
    delete<T extends UserGenderInterestDeleteArgs>(args: SelectSubset<T, UserGenderInterestDeleteArgs<ExtArgs>>): Prisma__UserGenderInterestClient<$Result.GetResult<Prisma.$UserGenderInterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGenderInterest.
     * @param {UserGenderInterestUpdateArgs} args - Arguments to update one UserGenderInterest.
     * @example
     * // Update one UserGenderInterest
     * const userGenderInterest = await prisma.userGenderInterest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGenderInterestUpdateArgs>(args: SelectSubset<T, UserGenderInterestUpdateArgs<ExtArgs>>): Prisma__UserGenderInterestClient<$Result.GetResult<Prisma.$UserGenderInterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGenderInterests.
     * @param {UserGenderInterestDeleteManyArgs} args - Arguments to filter UserGenderInterests to delete.
     * @example
     * // Delete a few UserGenderInterests
     * const { count } = await prisma.userGenderInterest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGenderInterestDeleteManyArgs>(args?: SelectSubset<T, UserGenderInterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGenderInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGenderInterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGenderInterests
     * const userGenderInterest = await prisma.userGenderInterest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGenderInterestUpdateManyArgs>(args: SelectSubset<T, UserGenderInterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGenderInterests and returns the data updated in the database.
     * @param {UserGenderInterestUpdateManyAndReturnArgs} args - Arguments to update many UserGenderInterests.
     * @example
     * // Update many UserGenderInterests
     * const userGenderInterest = await prisma.userGenderInterest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGenderInterests and only return the `id`
     * const userGenderInterestWithIdOnly = await prisma.userGenderInterest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGenderInterestUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGenderInterestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGenderInterestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGenderInterest.
     * @param {UserGenderInterestUpsertArgs} args - Arguments to update or create a UserGenderInterest.
     * @example
     * // Update or create a UserGenderInterest
     * const userGenderInterest = await prisma.userGenderInterest.upsert({
     *   create: {
     *     // ... data to create a UserGenderInterest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGenderInterest we want to update
     *   }
     * })
     */
    upsert<T extends UserGenderInterestUpsertArgs>(args: SelectSubset<T, UserGenderInterestUpsertArgs<ExtArgs>>): Prisma__UserGenderInterestClient<$Result.GetResult<Prisma.$UserGenderInterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGenderInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGenderInterestCountArgs} args - Arguments to filter UserGenderInterests to count.
     * @example
     * // Count the number of UserGenderInterests
     * const count = await prisma.userGenderInterest.count({
     *   where: {
     *     // ... the filter for the UserGenderInterests we want to count
     *   }
     * })
    **/
    count<T extends UserGenderInterestCountArgs>(
      args?: Subset<T, UserGenderInterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGenderInterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGenderInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGenderInterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGenderInterestAggregateArgs>(args: Subset<T, UserGenderInterestAggregateArgs>): Prisma.PrismaPromise<GetUserGenderInterestAggregateType<T>>

    /**
     * Group by UserGenderInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGenderInterestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGenderInterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGenderInterestGroupByArgs['orderBy'] }
        : { orderBy?: UserGenderInterestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGenderInterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGenderInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGenderInterest model
   */
  readonly fields: UserGenderInterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGenderInterest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGenderInterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGenderInterest model
   */
  interface UserGenderInterestFieldRefs {
    readonly id: FieldRef<"UserGenderInterest", 'Int'>
    readonly userId: FieldRef<"UserGenderInterest", 'String'>
    readonly value: FieldRef<"UserGenderInterest", 'GenderInterest'>
  }
    

  // Custom InputTypes
  /**
   * UserGenderInterest findUnique
   */
  export type UserGenderInterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenderInterest
     */
    select?: UserGenderInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenderInterest
     */
    omit?: UserGenderInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenderInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserGenderInterest to fetch.
     */
    where: UserGenderInterestWhereUniqueInput
  }

  /**
   * UserGenderInterest findUniqueOrThrow
   */
  export type UserGenderInterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenderInterest
     */
    select?: UserGenderInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenderInterest
     */
    omit?: UserGenderInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenderInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserGenderInterest to fetch.
     */
    where: UserGenderInterestWhereUniqueInput
  }

  /**
   * UserGenderInterest findFirst
   */
  export type UserGenderInterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenderInterest
     */
    select?: UserGenderInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenderInterest
     */
    omit?: UserGenderInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenderInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserGenderInterest to fetch.
     */
    where?: UserGenderInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGenderInterests to fetch.
     */
    orderBy?: UserGenderInterestOrderByWithRelationInput | UserGenderInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGenderInterests.
     */
    cursor?: UserGenderInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGenderInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGenderInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGenderInterests.
     */
    distinct?: UserGenderInterestScalarFieldEnum | UserGenderInterestScalarFieldEnum[]
  }

  /**
   * UserGenderInterest findFirstOrThrow
   */
  export type UserGenderInterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenderInterest
     */
    select?: UserGenderInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenderInterest
     */
    omit?: UserGenderInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenderInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserGenderInterest to fetch.
     */
    where?: UserGenderInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGenderInterests to fetch.
     */
    orderBy?: UserGenderInterestOrderByWithRelationInput | UserGenderInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGenderInterests.
     */
    cursor?: UserGenderInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGenderInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGenderInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGenderInterests.
     */
    distinct?: UserGenderInterestScalarFieldEnum | UserGenderInterestScalarFieldEnum[]
  }

  /**
   * UserGenderInterest findMany
   */
  export type UserGenderInterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenderInterest
     */
    select?: UserGenderInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenderInterest
     */
    omit?: UserGenderInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenderInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserGenderInterests to fetch.
     */
    where?: UserGenderInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGenderInterests to fetch.
     */
    orderBy?: UserGenderInterestOrderByWithRelationInput | UserGenderInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGenderInterests.
     */
    cursor?: UserGenderInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGenderInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGenderInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGenderInterests.
     */
    distinct?: UserGenderInterestScalarFieldEnum | UserGenderInterestScalarFieldEnum[]
  }

  /**
   * UserGenderInterest create
   */
  export type UserGenderInterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenderInterest
     */
    select?: UserGenderInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenderInterest
     */
    omit?: UserGenderInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenderInterestInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGenderInterest.
     */
    data: XOR<UserGenderInterestCreateInput, UserGenderInterestUncheckedCreateInput>
  }

  /**
   * UserGenderInterest createMany
   */
  export type UserGenderInterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGenderInterests.
     */
    data: UserGenderInterestCreateManyInput | UserGenderInterestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGenderInterest createManyAndReturn
   */
  export type UserGenderInterestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenderInterest
     */
    select?: UserGenderInterestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenderInterest
     */
    omit?: UserGenderInterestOmit<ExtArgs> | null
    /**
     * The data used to create many UserGenderInterests.
     */
    data: UserGenderInterestCreateManyInput | UserGenderInterestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenderInterestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGenderInterest update
   */
  export type UserGenderInterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenderInterest
     */
    select?: UserGenderInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenderInterest
     */
    omit?: UserGenderInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenderInterestInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGenderInterest.
     */
    data: XOR<UserGenderInterestUpdateInput, UserGenderInterestUncheckedUpdateInput>
    /**
     * Choose, which UserGenderInterest to update.
     */
    where: UserGenderInterestWhereUniqueInput
  }

  /**
   * UserGenderInterest updateMany
   */
  export type UserGenderInterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGenderInterests.
     */
    data: XOR<UserGenderInterestUpdateManyMutationInput, UserGenderInterestUncheckedUpdateManyInput>
    /**
     * Filter which UserGenderInterests to update
     */
    where?: UserGenderInterestWhereInput
    /**
     * Limit how many UserGenderInterests to update.
     */
    limit?: number
  }

  /**
   * UserGenderInterest updateManyAndReturn
   */
  export type UserGenderInterestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenderInterest
     */
    select?: UserGenderInterestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenderInterest
     */
    omit?: UserGenderInterestOmit<ExtArgs> | null
    /**
     * The data used to update UserGenderInterests.
     */
    data: XOR<UserGenderInterestUpdateManyMutationInput, UserGenderInterestUncheckedUpdateManyInput>
    /**
     * Filter which UserGenderInterests to update
     */
    where?: UserGenderInterestWhereInput
    /**
     * Limit how many UserGenderInterests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenderInterestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGenderInterest upsert
   */
  export type UserGenderInterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenderInterest
     */
    select?: UserGenderInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenderInterest
     */
    omit?: UserGenderInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenderInterestInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGenderInterest to update in case it exists.
     */
    where: UserGenderInterestWhereUniqueInput
    /**
     * In case the UserGenderInterest found by the `where` argument doesn't exist, create a new UserGenderInterest with this data.
     */
    create: XOR<UserGenderInterestCreateInput, UserGenderInterestUncheckedCreateInput>
    /**
     * In case the UserGenderInterest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGenderInterestUpdateInput, UserGenderInterestUncheckedUpdateInput>
  }

  /**
   * UserGenderInterest delete
   */
  export type UserGenderInterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenderInterest
     */
    select?: UserGenderInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenderInterest
     */
    omit?: UserGenderInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenderInterestInclude<ExtArgs> | null
    /**
     * Filter which UserGenderInterest to delete.
     */
    where: UserGenderInterestWhereUniqueInput
  }

  /**
   * UserGenderInterest deleteMany
   */
  export type UserGenderInterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGenderInterests to delete
     */
    where?: UserGenderInterestWhereInput
    /**
     * Limit how many UserGenderInterests to delete.
     */
    limit?: number
  }

  /**
   * UserGenderInterest without action
   */
  export type UserGenderInterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenderInterest
     */
    select?: UserGenderInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenderInterest
     */
    omit?: UserGenderInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenderInterestInclude<ExtArgs> | null
  }


  /**
   * Model UserSexualityInterest
   */

  export type AggregateUserSexualityInterest = {
    _count: UserSexualityInterestCountAggregateOutputType | null
    _avg: UserSexualityInterestAvgAggregateOutputType | null
    _sum: UserSexualityInterestSumAggregateOutputType | null
    _min: UserSexualityInterestMinAggregateOutputType | null
    _max: UserSexualityInterestMaxAggregateOutputType | null
  }

  export type UserSexualityInterestAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSexualityInterestSumAggregateOutputType = {
    id: number | null
  }

  export type UserSexualityInterestMinAggregateOutputType = {
    id: number | null
    userId: string | null
    value: $Enums.SexualityInterest | null
  }

  export type UserSexualityInterestMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    value: $Enums.SexualityInterest | null
  }

  export type UserSexualityInterestCountAggregateOutputType = {
    id: number
    userId: number
    value: number
    _all: number
  }


  export type UserSexualityInterestAvgAggregateInputType = {
    id?: true
  }

  export type UserSexualityInterestSumAggregateInputType = {
    id?: true
  }

  export type UserSexualityInterestMinAggregateInputType = {
    id?: true
    userId?: true
    value?: true
  }

  export type UserSexualityInterestMaxAggregateInputType = {
    id?: true
    userId?: true
    value?: true
  }

  export type UserSexualityInterestCountAggregateInputType = {
    id?: true
    userId?: true
    value?: true
    _all?: true
  }

  export type UserSexualityInterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSexualityInterest to aggregate.
     */
    where?: UserSexualityInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSexualityInterests to fetch.
     */
    orderBy?: UserSexualityInterestOrderByWithRelationInput | UserSexualityInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSexualityInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSexualityInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSexualityInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSexualityInterests
    **/
    _count?: true | UserSexualityInterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSexualityInterestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSexualityInterestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSexualityInterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSexualityInterestMaxAggregateInputType
  }

  export type GetUserSexualityInterestAggregateType<T extends UserSexualityInterestAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSexualityInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSexualityInterest[P]>
      : GetScalarType<T[P], AggregateUserSexualityInterest[P]>
  }




  export type UserSexualityInterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSexualityInterestWhereInput
    orderBy?: UserSexualityInterestOrderByWithAggregationInput | UserSexualityInterestOrderByWithAggregationInput[]
    by: UserSexualityInterestScalarFieldEnum[] | UserSexualityInterestScalarFieldEnum
    having?: UserSexualityInterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSexualityInterestCountAggregateInputType | true
    _avg?: UserSexualityInterestAvgAggregateInputType
    _sum?: UserSexualityInterestSumAggregateInputType
    _min?: UserSexualityInterestMinAggregateInputType
    _max?: UserSexualityInterestMaxAggregateInputType
  }

  export type UserSexualityInterestGroupByOutputType = {
    id: number
    userId: string
    value: $Enums.SexualityInterest
    _count: UserSexualityInterestCountAggregateOutputType | null
    _avg: UserSexualityInterestAvgAggregateOutputType | null
    _sum: UserSexualityInterestSumAggregateOutputType | null
    _min: UserSexualityInterestMinAggregateOutputType | null
    _max: UserSexualityInterestMaxAggregateOutputType | null
  }

  type GetUserSexualityInterestGroupByPayload<T extends UserSexualityInterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSexualityInterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSexualityInterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSexualityInterestGroupByOutputType[P]>
            : GetScalarType<T[P], UserSexualityInterestGroupByOutputType[P]>
        }
      >
    >


  export type UserSexualityInterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    value?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSexualityInterest"]>

  export type UserSexualityInterestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    value?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSexualityInterest"]>

  export type UserSexualityInterestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    value?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSexualityInterest"]>

  export type UserSexualityInterestSelectScalar = {
    id?: boolean
    userId?: boolean
    value?: boolean
  }

  export type UserSexualityInterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "value", ExtArgs["result"]["userSexualityInterest"]>
  export type UserSexualityInterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserSexualityInterestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserSexualityInterestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $UserSexualityInterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSexualityInterest"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      value: $Enums.SexualityInterest
    }, ExtArgs["result"]["userSexualityInterest"]>
    composites: {}
  }

  type UserSexualityInterestGetPayload<S extends boolean | null | undefined | UserSexualityInterestDefaultArgs> = $Result.GetResult<Prisma.$UserSexualityInterestPayload, S>

  type UserSexualityInterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSexualityInterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSexualityInterestCountAggregateInputType | true
    }

  export interface UserSexualityInterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSexualityInterest'], meta: { name: 'UserSexualityInterest' } }
    /**
     * Find zero or one UserSexualityInterest that matches the filter.
     * @param {UserSexualityInterestFindUniqueArgs} args - Arguments to find a UserSexualityInterest
     * @example
     * // Get one UserSexualityInterest
     * const userSexualityInterest = await prisma.userSexualityInterest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSexualityInterestFindUniqueArgs>(args: SelectSubset<T, UserSexualityInterestFindUniqueArgs<ExtArgs>>): Prisma__UserSexualityInterestClient<$Result.GetResult<Prisma.$UserSexualityInterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSexualityInterest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSexualityInterestFindUniqueOrThrowArgs} args - Arguments to find a UserSexualityInterest
     * @example
     * // Get one UserSexualityInterest
     * const userSexualityInterest = await prisma.userSexualityInterest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSexualityInterestFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSexualityInterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSexualityInterestClient<$Result.GetResult<Prisma.$UserSexualityInterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSexualityInterest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSexualityInterestFindFirstArgs} args - Arguments to find a UserSexualityInterest
     * @example
     * // Get one UserSexualityInterest
     * const userSexualityInterest = await prisma.userSexualityInterest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSexualityInterestFindFirstArgs>(args?: SelectSubset<T, UserSexualityInterestFindFirstArgs<ExtArgs>>): Prisma__UserSexualityInterestClient<$Result.GetResult<Prisma.$UserSexualityInterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSexualityInterest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSexualityInterestFindFirstOrThrowArgs} args - Arguments to find a UserSexualityInterest
     * @example
     * // Get one UserSexualityInterest
     * const userSexualityInterest = await prisma.userSexualityInterest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSexualityInterestFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSexualityInterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSexualityInterestClient<$Result.GetResult<Prisma.$UserSexualityInterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSexualityInterests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSexualityInterestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSexualityInterests
     * const userSexualityInterests = await prisma.userSexualityInterest.findMany()
     * 
     * // Get first 10 UserSexualityInterests
     * const userSexualityInterests = await prisma.userSexualityInterest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSexualityInterestWithIdOnly = await prisma.userSexualityInterest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSexualityInterestFindManyArgs>(args?: SelectSubset<T, UserSexualityInterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSexualityInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSexualityInterest.
     * @param {UserSexualityInterestCreateArgs} args - Arguments to create a UserSexualityInterest.
     * @example
     * // Create one UserSexualityInterest
     * const UserSexualityInterest = await prisma.userSexualityInterest.create({
     *   data: {
     *     // ... data to create a UserSexualityInterest
     *   }
     * })
     * 
     */
    create<T extends UserSexualityInterestCreateArgs>(args: SelectSubset<T, UserSexualityInterestCreateArgs<ExtArgs>>): Prisma__UserSexualityInterestClient<$Result.GetResult<Prisma.$UserSexualityInterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSexualityInterests.
     * @param {UserSexualityInterestCreateManyArgs} args - Arguments to create many UserSexualityInterests.
     * @example
     * // Create many UserSexualityInterests
     * const userSexualityInterest = await prisma.userSexualityInterest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSexualityInterestCreateManyArgs>(args?: SelectSubset<T, UserSexualityInterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSexualityInterests and returns the data saved in the database.
     * @param {UserSexualityInterestCreateManyAndReturnArgs} args - Arguments to create many UserSexualityInterests.
     * @example
     * // Create many UserSexualityInterests
     * const userSexualityInterest = await prisma.userSexualityInterest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSexualityInterests and only return the `id`
     * const userSexualityInterestWithIdOnly = await prisma.userSexualityInterest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSexualityInterestCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSexualityInterestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSexualityInterestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSexualityInterest.
     * @param {UserSexualityInterestDeleteArgs} args - Arguments to delete one UserSexualityInterest.
     * @example
     * // Delete one UserSexualityInterest
     * const UserSexualityInterest = await prisma.userSexualityInterest.delete({
     *   where: {
     *     // ... filter to delete one UserSexualityInterest
     *   }
     * })
     * 
     */
    delete<T extends UserSexualityInterestDeleteArgs>(args: SelectSubset<T, UserSexualityInterestDeleteArgs<ExtArgs>>): Prisma__UserSexualityInterestClient<$Result.GetResult<Prisma.$UserSexualityInterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSexualityInterest.
     * @param {UserSexualityInterestUpdateArgs} args - Arguments to update one UserSexualityInterest.
     * @example
     * // Update one UserSexualityInterest
     * const userSexualityInterest = await prisma.userSexualityInterest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSexualityInterestUpdateArgs>(args: SelectSubset<T, UserSexualityInterestUpdateArgs<ExtArgs>>): Prisma__UserSexualityInterestClient<$Result.GetResult<Prisma.$UserSexualityInterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSexualityInterests.
     * @param {UserSexualityInterestDeleteManyArgs} args - Arguments to filter UserSexualityInterests to delete.
     * @example
     * // Delete a few UserSexualityInterests
     * const { count } = await prisma.userSexualityInterest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSexualityInterestDeleteManyArgs>(args?: SelectSubset<T, UserSexualityInterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSexualityInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSexualityInterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSexualityInterests
     * const userSexualityInterest = await prisma.userSexualityInterest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSexualityInterestUpdateManyArgs>(args: SelectSubset<T, UserSexualityInterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSexualityInterests and returns the data updated in the database.
     * @param {UserSexualityInterestUpdateManyAndReturnArgs} args - Arguments to update many UserSexualityInterests.
     * @example
     * // Update many UserSexualityInterests
     * const userSexualityInterest = await prisma.userSexualityInterest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSexualityInterests and only return the `id`
     * const userSexualityInterestWithIdOnly = await prisma.userSexualityInterest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSexualityInterestUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSexualityInterestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSexualityInterestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSexualityInterest.
     * @param {UserSexualityInterestUpsertArgs} args - Arguments to update or create a UserSexualityInterest.
     * @example
     * // Update or create a UserSexualityInterest
     * const userSexualityInterest = await prisma.userSexualityInterest.upsert({
     *   create: {
     *     // ... data to create a UserSexualityInterest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSexualityInterest we want to update
     *   }
     * })
     */
    upsert<T extends UserSexualityInterestUpsertArgs>(args: SelectSubset<T, UserSexualityInterestUpsertArgs<ExtArgs>>): Prisma__UserSexualityInterestClient<$Result.GetResult<Prisma.$UserSexualityInterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSexualityInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSexualityInterestCountArgs} args - Arguments to filter UserSexualityInterests to count.
     * @example
     * // Count the number of UserSexualityInterests
     * const count = await prisma.userSexualityInterest.count({
     *   where: {
     *     // ... the filter for the UserSexualityInterests we want to count
     *   }
     * })
    **/
    count<T extends UserSexualityInterestCountArgs>(
      args?: Subset<T, UserSexualityInterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSexualityInterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSexualityInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSexualityInterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSexualityInterestAggregateArgs>(args: Subset<T, UserSexualityInterestAggregateArgs>): Prisma.PrismaPromise<GetUserSexualityInterestAggregateType<T>>

    /**
     * Group by UserSexualityInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSexualityInterestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSexualityInterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSexualityInterestGroupByArgs['orderBy'] }
        : { orderBy?: UserSexualityInterestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSexualityInterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSexualityInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSexualityInterest model
   */
  readonly fields: UserSexualityInterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSexualityInterest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSexualityInterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSexualityInterest model
   */
  interface UserSexualityInterestFieldRefs {
    readonly id: FieldRef<"UserSexualityInterest", 'Int'>
    readonly userId: FieldRef<"UserSexualityInterest", 'String'>
    readonly value: FieldRef<"UserSexualityInterest", 'SexualityInterest'>
  }
    

  // Custom InputTypes
  /**
   * UserSexualityInterest findUnique
   */
  export type UserSexualityInterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSexualityInterest
     */
    select?: UserSexualityInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSexualityInterest
     */
    omit?: UserSexualityInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSexualityInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserSexualityInterest to fetch.
     */
    where: UserSexualityInterestWhereUniqueInput
  }

  /**
   * UserSexualityInterest findUniqueOrThrow
   */
  export type UserSexualityInterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSexualityInterest
     */
    select?: UserSexualityInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSexualityInterest
     */
    omit?: UserSexualityInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSexualityInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserSexualityInterest to fetch.
     */
    where: UserSexualityInterestWhereUniqueInput
  }

  /**
   * UserSexualityInterest findFirst
   */
  export type UserSexualityInterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSexualityInterest
     */
    select?: UserSexualityInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSexualityInterest
     */
    omit?: UserSexualityInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSexualityInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserSexualityInterest to fetch.
     */
    where?: UserSexualityInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSexualityInterests to fetch.
     */
    orderBy?: UserSexualityInterestOrderByWithRelationInput | UserSexualityInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSexualityInterests.
     */
    cursor?: UserSexualityInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSexualityInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSexualityInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSexualityInterests.
     */
    distinct?: UserSexualityInterestScalarFieldEnum | UserSexualityInterestScalarFieldEnum[]
  }

  /**
   * UserSexualityInterest findFirstOrThrow
   */
  export type UserSexualityInterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSexualityInterest
     */
    select?: UserSexualityInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSexualityInterest
     */
    omit?: UserSexualityInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSexualityInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserSexualityInterest to fetch.
     */
    where?: UserSexualityInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSexualityInterests to fetch.
     */
    orderBy?: UserSexualityInterestOrderByWithRelationInput | UserSexualityInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSexualityInterests.
     */
    cursor?: UserSexualityInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSexualityInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSexualityInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSexualityInterests.
     */
    distinct?: UserSexualityInterestScalarFieldEnum | UserSexualityInterestScalarFieldEnum[]
  }

  /**
   * UserSexualityInterest findMany
   */
  export type UserSexualityInterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSexualityInterest
     */
    select?: UserSexualityInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSexualityInterest
     */
    omit?: UserSexualityInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSexualityInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserSexualityInterests to fetch.
     */
    where?: UserSexualityInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSexualityInterests to fetch.
     */
    orderBy?: UserSexualityInterestOrderByWithRelationInput | UserSexualityInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSexualityInterests.
     */
    cursor?: UserSexualityInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSexualityInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSexualityInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSexualityInterests.
     */
    distinct?: UserSexualityInterestScalarFieldEnum | UserSexualityInterestScalarFieldEnum[]
  }

  /**
   * UserSexualityInterest create
   */
  export type UserSexualityInterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSexualityInterest
     */
    select?: UserSexualityInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSexualityInterest
     */
    omit?: UserSexualityInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSexualityInterestInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSexualityInterest.
     */
    data: XOR<UserSexualityInterestCreateInput, UserSexualityInterestUncheckedCreateInput>
  }

  /**
   * UserSexualityInterest createMany
   */
  export type UserSexualityInterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSexualityInterests.
     */
    data: UserSexualityInterestCreateManyInput | UserSexualityInterestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSexualityInterest createManyAndReturn
   */
  export type UserSexualityInterestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSexualityInterest
     */
    select?: UserSexualityInterestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSexualityInterest
     */
    omit?: UserSexualityInterestOmit<ExtArgs> | null
    /**
     * The data used to create many UserSexualityInterests.
     */
    data: UserSexualityInterestCreateManyInput | UserSexualityInterestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSexualityInterestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSexualityInterest update
   */
  export type UserSexualityInterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSexualityInterest
     */
    select?: UserSexualityInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSexualityInterest
     */
    omit?: UserSexualityInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSexualityInterestInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSexualityInterest.
     */
    data: XOR<UserSexualityInterestUpdateInput, UserSexualityInterestUncheckedUpdateInput>
    /**
     * Choose, which UserSexualityInterest to update.
     */
    where: UserSexualityInterestWhereUniqueInput
  }

  /**
   * UserSexualityInterest updateMany
   */
  export type UserSexualityInterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSexualityInterests.
     */
    data: XOR<UserSexualityInterestUpdateManyMutationInput, UserSexualityInterestUncheckedUpdateManyInput>
    /**
     * Filter which UserSexualityInterests to update
     */
    where?: UserSexualityInterestWhereInput
    /**
     * Limit how many UserSexualityInterests to update.
     */
    limit?: number
  }

  /**
   * UserSexualityInterest updateManyAndReturn
   */
  export type UserSexualityInterestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSexualityInterest
     */
    select?: UserSexualityInterestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSexualityInterest
     */
    omit?: UserSexualityInterestOmit<ExtArgs> | null
    /**
     * The data used to update UserSexualityInterests.
     */
    data: XOR<UserSexualityInterestUpdateManyMutationInput, UserSexualityInterestUncheckedUpdateManyInput>
    /**
     * Filter which UserSexualityInterests to update
     */
    where?: UserSexualityInterestWhereInput
    /**
     * Limit how many UserSexualityInterests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSexualityInterestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSexualityInterest upsert
   */
  export type UserSexualityInterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSexualityInterest
     */
    select?: UserSexualityInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSexualityInterest
     */
    omit?: UserSexualityInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSexualityInterestInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSexualityInterest to update in case it exists.
     */
    where: UserSexualityInterestWhereUniqueInput
    /**
     * In case the UserSexualityInterest found by the `where` argument doesn't exist, create a new UserSexualityInterest with this data.
     */
    create: XOR<UserSexualityInterestCreateInput, UserSexualityInterestUncheckedCreateInput>
    /**
     * In case the UserSexualityInterest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSexualityInterestUpdateInput, UserSexualityInterestUncheckedUpdateInput>
  }

  /**
   * UserSexualityInterest delete
   */
  export type UserSexualityInterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSexualityInterest
     */
    select?: UserSexualityInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSexualityInterest
     */
    omit?: UserSexualityInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSexualityInterestInclude<ExtArgs> | null
    /**
     * Filter which UserSexualityInterest to delete.
     */
    where: UserSexualityInterestWhereUniqueInput
  }

  /**
   * UserSexualityInterest deleteMany
   */
  export type UserSexualityInterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSexualityInterests to delete
     */
    where?: UserSexualityInterestWhereInput
    /**
     * Limit how many UserSexualityInterests to delete.
     */
    limit?: number
  }

  /**
   * UserSexualityInterest without action
   */
  export type UserSexualityInterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSexualityInterest
     */
    select?: UserSexualityInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSexualityInterest
     */
    omit?: UserSexualityInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSexualityInterestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    passwordHash: 'passwordHash',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lat: 'lat',
    lng: 'lng',
    locationEnabled: 'locationEnabled',
    locationUpdatedAt: 'locationUpdatedAt',
    role: 'role',
    relationshipStatus: 'relationshipStatus'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    userId: 'userId',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    replacedBy: 'replacedBy',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    userId: 'userId',
    type: 'type',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UserDataScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    avatar: 'avatar',
    avatarUrl: 'avatarUrl',
    nickname: 'nickname',
    description: 'description',
    bio: 'bio',
    birth: 'birth',
    heightCm: 'heightCm',
    weightKg: 'weightKg',
    gender: 'gender',
    sexuality: 'sexuality',
    pronouns: 'pronouns',
    city: 'city',
    transStatus: 'transStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserDataScalarFieldEnum = (typeof UserDataScalarFieldEnum)[keyof typeof UserDataScalarFieldEnum]


  export const UserPreferenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    minAge: 'minAge',
    maxAge: 'maxAge',
    minHeightCm: 'minHeightCm',
    maxHeightCm: 'maxHeightCm',
    maxDistanceKm: 'maxDistanceKm',
    verifiedOnly: 'verifiedOnly',
    locationRequired: 'locationRequired',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPreferenceScalarFieldEnum = (typeof UserPreferenceScalarFieldEnum)[keyof typeof UserPreferenceScalarFieldEnum]


  export const UserLookingForScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    value: 'value'
  };

  export type UserLookingForScalarFieldEnum = (typeof UserLookingForScalarFieldEnum)[keyof typeof UserLookingForScalarFieldEnum]


  export const UserGenderInterestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    value: 'value'
  };

  export type UserGenderInterestScalarFieldEnum = (typeof UserGenderInterestScalarFieldEnum)[keyof typeof UserGenderInterestScalarFieldEnum]


  export const UserSexualityInterestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    value: 'value'
  };

  export type UserSexualityInterestScalarFieldEnum = (typeof UserSexualityInterestScalarFieldEnum)[keyof typeof UserSexualityInterestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'RelationshipStatus'
   */
  export type EnumRelationshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationshipStatus'>
    


  /**
   * Reference to a field of type 'RelationshipStatus[]'
   */
  export type ListEnumRelationshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationshipStatus[]'>
    


  /**
   * Reference to a field of type 'VerificationTokenType'
   */
  export type EnumVerificationTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationTokenType'>
    


  /**
   * Reference to a field of type 'VerificationTokenType[]'
   */
  export type ListEnumVerificationTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationTokenType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Sexuality'
   */
  export type EnumSexualityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexuality'>
    


  /**
   * Reference to a field of type 'Sexuality[]'
   */
  export type ListEnumSexualityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexuality[]'>
    


  /**
   * Reference to a field of type 'City'
   */
  export type EnumCityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'City'>
    


  /**
   * Reference to a field of type 'City[]'
   */
  export type ListEnumCityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'City[]'>
    


  /**
   * Reference to a field of type 'TransStatus'
   */
  export type EnumTransStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransStatus'>
    


  /**
   * Reference to a field of type 'TransStatus[]'
   */
  export type ListEnumTransStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransStatus[]'>
    


  /**
   * Reference to a field of type 'LookingFor'
   */
  export type EnumLookingForFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LookingFor'>
    


  /**
   * Reference to a field of type 'LookingFor[]'
   */
  export type ListEnumLookingForFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LookingFor[]'>
    


  /**
   * Reference to a field of type 'GenderInterest'
   */
  export type EnumGenderInterestFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderInterest'>
    


  /**
   * Reference to a field of type 'GenderInterest[]'
   */
  export type ListEnumGenderInterestFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderInterest[]'>
    


  /**
   * Reference to a field of type 'SexualityInterest'
   */
  export type EnumSexualityInterestFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SexualityInterest'>
    


  /**
   * Reference to a field of type 'SexualityInterest[]'
   */
  export type ListEnumSexualityInterestFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SexualityInterest[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    passwordHash?: StringFilter<"Users"> | string
    emailVerified?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    lat?: FloatNullableFilter<"Users"> | number | null
    lng?: FloatNullableFilter<"Users"> | number | null
    locationEnabled?: BoolFilter<"Users"> | boolean
    locationUpdatedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    relationshipStatus?: EnumRelationshipStatusNullableFilter<"Users"> | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenListRelationFilter
    verificationTokens?: VerificationTokenListRelationFilter
    lookingFor?: UserLookingForListRelationFilter
    genderInterest?: UserGenderInterestListRelationFilter
    sexualityInteres?: UserSexualityInterestListRelationFilter
    userData?: XOR<UserDataNullableScalarRelationFilter, UserDataWhereInput> | null
    userPreference?: XOR<UserPreferenceNullableScalarRelationFilter, UserPreferenceWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    locationEnabled?: SortOrder
    locationUpdatedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    relationshipStatus?: SortOrderInput | SortOrder
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    verificationTokens?: VerificationTokenOrderByRelationAggregateInput
    lookingFor?: UserLookingForOrderByRelationAggregateInput
    genderInterest?: UserGenderInterestOrderByRelationAggregateInput
    sexualityInteres?: UserSexualityInterestOrderByRelationAggregateInput
    userData?: UserDataOrderByWithRelationInput
    userPreference?: UserPreferenceOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    passwordHash?: StringFilter<"Users"> | string
    emailVerified?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    lat?: FloatNullableFilter<"Users"> | number | null
    lng?: FloatNullableFilter<"Users"> | number | null
    locationEnabled?: BoolFilter<"Users"> | boolean
    locationUpdatedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    relationshipStatus?: EnumRelationshipStatusNullableFilter<"Users"> | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenListRelationFilter
    verificationTokens?: VerificationTokenListRelationFilter
    lookingFor?: UserLookingForListRelationFilter
    genderInterest?: UserGenderInterestListRelationFilter
    sexualityInteres?: UserSexualityInterestListRelationFilter
    userData?: XOR<UserDataNullableScalarRelationFilter, UserDataWhereInput> | null
    userPreference?: XOR<UserPreferenceNullableScalarRelationFilter, UserPreferenceWhereInput> | null
  }, "id" | "username" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    locationEnabled?: SortOrder
    locationUpdatedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    relationshipStatus?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    passwordHash?: StringWithAggregatesFilter<"Users"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    lat?: FloatNullableWithAggregatesFilter<"Users"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"Users"> | number | null
    locationEnabled?: BoolWithAggregatesFilter<"Users"> | boolean
    locationUpdatedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    role?: EnumUserRoleWithAggregatesFilter<"Users"> | $Enums.UserRole
    relationshipStatus?: EnumRelationshipStatusNullableWithAggregatesFilter<"Users"> | $Enums.RelationshipStatus | null
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    replacedBy?: StringNullableFilter<"RefreshToken"> | string | null
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    ipAddress?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    replacedBy?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    replacedBy?: StringNullableFilter<"RefreshToken"> | string | null
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    ipAddress?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "tokenHash">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    replacedBy?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    tokenHash?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"RefreshToken"> | Date | string | null
    replacedBy?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    id?: StringFilter<"VerificationToken"> | string
    tokenHash?: StringFilter<"VerificationToken"> | string
    userId?: StringFilter<"VerificationToken"> | string
    type?: EnumVerificationTokenTypeFilter<"VerificationToken"> | $Enums.VerificationTokenType
    expiresAt?: DateTimeFilter<"VerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"VerificationToken"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type VerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    userId?: StringFilter<"VerificationToken"> | string
    type?: EnumVerificationTokenTypeFilter<"VerificationToken"> | $Enums.VerificationTokenType
    expiresAt?: DateTimeFilter<"VerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"VerificationToken"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "tokenHash">

  export type VerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationToken"> | string
    tokenHash?: StringWithAggregatesFilter<"VerificationToken"> | string
    userId?: StringWithAggregatesFilter<"VerificationToken"> | string
    type?: EnumVerificationTokenTypeWithAggregatesFilter<"VerificationToken"> | $Enums.VerificationTokenType
    expiresAt?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserDataWhereInput = {
    AND?: UserDataWhereInput | UserDataWhereInput[]
    OR?: UserDataWhereInput[]
    NOT?: UserDataWhereInput | UserDataWhereInput[]
    id?: IntFilter<"UserData"> | number
    userId?: StringFilter<"UserData"> | string
    avatar?: StringNullableFilter<"UserData"> | string | null
    avatarUrl?: StringNullableFilter<"UserData"> | string | null
    nickname?: StringNullableFilter<"UserData"> | string | null
    description?: StringNullableFilter<"UserData"> | string | null
    bio?: StringNullableFilter<"UserData"> | string | null
    birth?: DateTimeFilter<"UserData"> | Date | string
    heightCm?: IntNullableFilter<"UserData"> | number | null
    weightKg?: IntNullableFilter<"UserData"> | number | null
    gender?: EnumGenderNullableFilter<"UserData"> | $Enums.Gender | null
    sexuality?: EnumSexualityNullableFilter<"UserData"> | $Enums.Sexuality | null
    pronouns?: StringNullableFilter<"UserData"> | string | null
    city?: EnumCityNullableFilter<"UserData"> | $Enums.City | null
    transStatus?: EnumTransStatusNullableFilter<"UserData"> | $Enums.TransStatus | null
    createdAt?: DateTimeFilter<"UserData"> | Date | string
    updatedAt?: DateTimeFilter<"UserData"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type UserDataOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    avatar?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    birth?: SortOrder
    heightCm?: SortOrderInput | SortOrder
    weightKg?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    sexuality?: SortOrderInput | SortOrder
    pronouns?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    transStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type UserDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserDataWhereInput | UserDataWhereInput[]
    OR?: UserDataWhereInput[]
    NOT?: UserDataWhereInput | UserDataWhereInput[]
    avatar?: StringNullableFilter<"UserData"> | string | null
    avatarUrl?: StringNullableFilter<"UserData"> | string | null
    nickname?: StringNullableFilter<"UserData"> | string | null
    description?: StringNullableFilter<"UserData"> | string | null
    bio?: StringNullableFilter<"UserData"> | string | null
    birth?: DateTimeFilter<"UserData"> | Date | string
    heightCm?: IntNullableFilter<"UserData"> | number | null
    weightKg?: IntNullableFilter<"UserData"> | number | null
    gender?: EnumGenderNullableFilter<"UserData"> | $Enums.Gender | null
    sexuality?: EnumSexualityNullableFilter<"UserData"> | $Enums.Sexuality | null
    pronouns?: StringNullableFilter<"UserData"> | string | null
    city?: EnumCityNullableFilter<"UserData"> | $Enums.City | null
    transStatus?: EnumTransStatusNullableFilter<"UserData"> | $Enums.TransStatus | null
    createdAt?: DateTimeFilter<"UserData"> | Date | string
    updatedAt?: DateTimeFilter<"UserData"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "userId">

  export type UserDataOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    avatar?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    birth?: SortOrder
    heightCm?: SortOrderInput | SortOrder
    weightKg?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    sexuality?: SortOrderInput | SortOrder
    pronouns?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    transStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserDataCountOrderByAggregateInput
    _avg?: UserDataAvgOrderByAggregateInput
    _max?: UserDataMaxOrderByAggregateInput
    _min?: UserDataMinOrderByAggregateInput
    _sum?: UserDataSumOrderByAggregateInput
  }

  export type UserDataScalarWhereWithAggregatesInput = {
    AND?: UserDataScalarWhereWithAggregatesInput | UserDataScalarWhereWithAggregatesInput[]
    OR?: UserDataScalarWhereWithAggregatesInput[]
    NOT?: UserDataScalarWhereWithAggregatesInput | UserDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserData"> | number
    userId?: StringWithAggregatesFilter<"UserData"> | string
    avatar?: StringNullableWithAggregatesFilter<"UserData"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"UserData"> | string | null
    nickname?: StringNullableWithAggregatesFilter<"UserData"> | string | null
    description?: StringNullableWithAggregatesFilter<"UserData"> | string | null
    bio?: StringNullableWithAggregatesFilter<"UserData"> | string | null
    birth?: DateTimeWithAggregatesFilter<"UserData"> | Date | string
    heightCm?: IntNullableWithAggregatesFilter<"UserData"> | number | null
    weightKg?: IntNullableWithAggregatesFilter<"UserData"> | number | null
    gender?: EnumGenderNullableWithAggregatesFilter<"UserData"> | $Enums.Gender | null
    sexuality?: EnumSexualityNullableWithAggregatesFilter<"UserData"> | $Enums.Sexuality | null
    pronouns?: StringNullableWithAggregatesFilter<"UserData"> | string | null
    city?: EnumCityNullableWithAggregatesFilter<"UserData"> | $Enums.City | null
    transStatus?: EnumTransStatusNullableWithAggregatesFilter<"UserData"> | $Enums.TransStatus | null
    createdAt?: DateTimeWithAggregatesFilter<"UserData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserData"> | Date | string
  }

  export type UserPreferenceWhereInput = {
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    id?: IntFilter<"UserPreference"> | number
    userId?: StringFilter<"UserPreference"> | string
    minAge?: IntNullableFilter<"UserPreference"> | number | null
    maxAge?: IntNullableFilter<"UserPreference"> | number | null
    minHeightCm?: IntNullableFilter<"UserPreference"> | number | null
    maxHeightCm?: IntNullableFilter<"UserPreference"> | number | null
    maxDistanceKm?: IntNullableFilter<"UserPreference"> | number | null
    verifiedOnly?: BoolFilter<"UserPreference"> | boolean
    locationRequired?: BoolFilter<"UserPreference"> | boolean
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type UserPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    minAge?: SortOrderInput | SortOrder
    maxAge?: SortOrderInput | SortOrder
    minHeightCm?: SortOrderInput | SortOrder
    maxHeightCm?: SortOrderInput | SortOrder
    maxDistanceKm?: SortOrderInput | SortOrder
    verifiedOnly?: SortOrder
    locationRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type UserPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    minAge?: IntNullableFilter<"UserPreference"> | number | null
    maxAge?: IntNullableFilter<"UserPreference"> | number | null
    minHeightCm?: IntNullableFilter<"UserPreference"> | number | null
    maxHeightCm?: IntNullableFilter<"UserPreference"> | number | null
    maxDistanceKm?: IntNullableFilter<"UserPreference"> | number | null
    verifiedOnly?: BoolFilter<"UserPreference"> | boolean
    locationRequired?: BoolFilter<"UserPreference"> | boolean
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "userId">

  export type UserPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    minAge?: SortOrderInput | SortOrder
    maxAge?: SortOrderInput | SortOrder
    minHeightCm?: SortOrderInput | SortOrder
    maxHeightCm?: SortOrderInput | SortOrder
    maxDistanceKm?: SortOrderInput | SortOrder
    verifiedOnly?: SortOrder
    locationRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPreferenceCountOrderByAggregateInput
    _avg?: UserPreferenceAvgOrderByAggregateInput
    _max?: UserPreferenceMaxOrderByAggregateInput
    _min?: UserPreferenceMinOrderByAggregateInput
    _sum?: UserPreferenceSumOrderByAggregateInput
  }

  export type UserPreferenceScalarWhereWithAggregatesInput = {
    AND?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    OR?: UserPreferenceScalarWhereWithAggregatesInput[]
    NOT?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserPreference"> | number
    userId?: StringWithAggregatesFilter<"UserPreference"> | string
    minAge?: IntNullableWithAggregatesFilter<"UserPreference"> | number | null
    maxAge?: IntNullableWithAggregatesFilter<"UserPreference"> | number | null
    minHeightCm?: IntNullableWithAggregatesFilter<"UserPreference"> | number | null
    maxHeightCm?: IntNullableWithAggregatesFilter<"UserPreference"> | number | null
    maxDistanceKm?: IntNullableWithAggregatesFilter<"UserPreference"> | number | null
    verifiedOnly?: BoolWithAggregatesFilter<"UserPreference"> | boolean
    locationRequired?: BoolWithAggregatesFilter<"UserPreference"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
  }

  export type UserLookingForWhereInput = {
    AND?: UserLookingForWhereInput | UserLookingForWhereInput[]
    OR?: UserLookingForWhereInput[]
    NOT?: UserLookingForWhereInput | UserLookingForWhereInput[]
    id?: IntFilter<"UserLookingFor"> | number
    userId?: StringFilter<"UserLookingFor"> | string
    value?: EnumLookingForFilter<"UserLookingFor"> | $Enums.LookingFor
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type UserLookingForOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type UserLookingForWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_value?: UserLookingForUserIdValueCompoundUniqueInput
    AND?: UserLookingForWhereInput | UserLookingForWhereInput[]
    OR?: UserLookingForWhereInput[]
    NOT?: UserLookingForWhereInput | UserLookingForWhereInput[]
    userId?: StringFilter<"UserLookingFor"> | string
    value?: EnumLookingForFilter<"UserLookingFor"> | $Enums.LookingFor
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "userId_value">

  export type UserLookingForOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    _count?: UserLookingForCountOrderByAggregateInput
    _avg?: UserLookingForAvgOrderByAggregateInput
    _max?: UserLookingForMaxOrderByAggregateInput
    _min?: UserLookingForMinOrderByAggregateInput
    _sum?: UserLookingForSumOrderByAggregateInput
  }

  export type UserLookingForScalarWhereWithAggregatesInput = {
    AND?: UserLookingForScalarWhereWithAggregatesInput | UserLookingForScalarWhereWithAggregatesInput[]
    OR?: UserLookingForScalarWhereWithAggregatesInput[]
    NOT?: UserLookingForScalarWhereWithAggregatesInput | UserLookingForScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserLookingFor"> | number
    userId?: StringWithAggregatesFilter<"UserLookingFor"> | string
    value?: EnumLookingForWithAggregatesFilter<"UserLookingFor"> | $Enums.LookingFor
  }

  export type UserGenderInterestWhereInput = {
    AND?: UserGenderInterestWhereInput | UserGenderInterestWhereInput[]
    OR?: UserGenderInterestWhereInput[]
    NOT?: UserGenderInterestWhereInput | UserGenderInterestWhereInput[]
    id?: IntFilter<"UserGenderInterest"> | number
    userId?: StringFilter<"UserGenderInterest"> | string
    value?: EnumGenderInterestFilter<"UserGenderInterest"> | $Enums.GenderInterest
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type UserGenderInterestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type UserGenderInterestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_value?: UserGenderInterestUserIdValueCompoundUniqueInput
    AND?: UserGenderInterestWhereInput | UserGenderInterestWhereInput[]
    OR?: UserGenderInterestWhereInput[]
    NOT?: UserGenderInterestWhereInput | UserGenderInterestWhereInput[]
    userId?: StringFilter<"UserGenderInterest"> | string
    value?: EnumGenderInterestFilter<"UserGenderInterest"> | $Enums.GenderInterest
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "userId_value">

  export type UserGenderInterestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    _count?: UserGenderInterestCountOrderByAggregateInput
    _avg?: UserGenderInterestAvgOrderByAggregateInput
    _max?: UserGenderInterestMaxOrderByAggregateInput
    _min?: UserGenderInterestMinOrderByAggregateInput
    _sum?: UserGenderInterestSumOrderByAggregateInput
  }

  export type UserGenderInterestScalarWhereWithAggregatesInput = {
    AND?: UserGenderInterestScalarWhereWithAggregatesInput | UserGenderInterestScalarWhereWithAggregatesInput[]
    OR?: UserGenderInterestScalarWhereWithAggregatesInput[]
    NOT?: UserGenderInterestScalarWhereWithAggregatesInput | UserGenderInterestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserGenderInterest"> | number
    userId?: StringWithAggregatesFilter<"UserGenderInterest"> | string
    value?: EnumGenderInterestWithAggregatesFilter<"UserGenderInterest"> | $Enums.GenderInterest
  }

  export type UserSexualityInterestWhereInput = {
    AND?: UserSexualityInterestWhereInput | UserSexualityInterestWhereInput[]
    OR?: UserSexualityInterestWhereInput[]
    NOT?: UserSexualityInterestWhereInput | UserSexualityInterestWhereInput[]
    id?: IntFilter<"UserSexualityInterest"> | number
    userId?: StringFilter<"UserSexualityInterest"> | string
    value?: EnumSexualityInterestFilter<"UserSexualityInterest"> | $Enums.SexualityInterest
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type UserSexualityInterestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type UserSexualityInterestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_value?: UserSexualityInterestUserIdValueCompoundUniqueInput
    AND?: UserSexualityInterestWhereInput | UserSexualityInterestWhereInput[]
    OR?: UserSexualityInterestWhereInput[]
    NOT?: UserSexualityInterestWhereInput | UserSexualityInterestWhereInput[]
    userId?: StringFilter<"UserSexualityInterest"> | string
    value?: EnumSexualityInterestFilter<"UserSexualityInterest"> | $Enums.SexualityInterest
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "userId_value">

  export type UserSexualityInterestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    _count?: UserSexualityInterestCountOrderByAggregateInput
    _avg?: UserSexualityInterestAvgOrderByAggregateInput
    _max?: UserSexualityInterestMaxOrderByAggregateInput
    _min?: UserSexualityInterestMinOrderByAggregateInput
    _sum?: UserSexualityInterestSumOrderByAggregateInput
  }

  export type UserSexualityInterestScalarWhereWithAggregatesInput = {
    AND?: UserSexualityInterestScalarWhereWithAggregatesInput | UserSexualityInterestScalarWhereWithAggregatesInput[]
    OR?: UserSexualityInterestScalarWhereWithAggregatesInput[]
    NOT?: UserSexualityInterestScalarWhereWithAggregatesInput | UserSexualityInterestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSexualityInterest"> | number
    userId?: StringWithAggregatesFilter<"UserSexualityInterest"> | string
    value?: EnumSexualityInterestWithAggregatesFilter<"UserSexualityInterest"> | $Enums.SexualityInterest
  }

  export type UsersCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    verificationTokens?: VerificationTokenCreateNestedManyWithoutUserInput
    lookingFor?: UserLookingForCreateNestedManyWithoutUserInput
    genderInterest?: UserGenderInterestCreateNestedManyWithoutUserInput
    sexualityInteres?: UserSexualityInterestCreateNestedManyWithoutUserInput
    userData?: UserDataCreateNestedOneWithoutUserInput
    userPreference?: UserPreferenceCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    verificationTokens?: VerificationTokenUncheckedCreateNestedManyWithoutUserInput
    lookingFor?: UserLookingForUncheckedCreateNestedManyWithoutUserInput
    genderInterest?: UserGenderInterestUncheckedCreateNestedManyWithoutUserInput
    sexualityInteres?: UserSexualityInterestUncheckedCreateNestedManyWithoutUserInput
    userData?: UserDataUncheckedCreateNestedOneWithoutUserInput
    userPreference?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    verificationTokens?: VerificationTokenUpdateManyWithoutUserNestedInput
    lookingFor?: UserLookingForUpdateManyWithoutUserNestedInput
    genderInterest?: UserGenderInterestUpdateManyWithoutUserNestedInput
    sexualityInteres?: UserSexualityInterestUpdateManyWithoutUserNestedInput
    userData?: UserDataUpdateOneWithoutUserNestedInput
    userPreference?: UserPreferenceUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    verificationTokens?: VerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    lookingFor?: UserLookingForUncheckedUpdateManyWithoutUserNestedInput
    genderInterest?: UserGenderInterestUncheckedUpdateManyWithoutUserNestedInput
    sexualityInteres?: UserSexualityInterestUncheckedUpdateManyWithoutUserNestedInput
    userData?: UserDataUncheckedUpdateOneWithoutUserNestedInput
    userPreference?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
  }

  export type RefreshTokenCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedBy?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    tokenHash: string
    userId: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedBy?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    tokenHash: string
    userId: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedBy?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    id?: string
    tokenHash: string
    type: $Enums.VerificationTokenType
    expiresAt: Date | string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutVerificationTokensInput
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: string
    tokenHash: string
    userId: string
    type: $Enums.VerificationTokenType
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationTokenTypeFieldUpdateOperationsInput | $Enums.VerificationTokenType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutVerificationTokensNestedInput
  }

  export type VerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationTokenTypeFieldUpdateOperationsInput | $Enums.VerificationTokenType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    id?: string
    tokenHash: string
    userId: string
    type: $Enums.VerificationTokenType
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationTokenTypeFieldUpdateOperationsInput | $Enums.VerificationTokenType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationTokenTypeFieldUpdateOperationsInput | $Enums.VerificationTokenType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDataCreateInput = {
    avatar?: string | null
    avatarUrl?: string | null
    nickname?: string | null
    description?: string | null
    bio?: string | null
    birth: Date | string
    heightCm?: number | null
    weightKg?: number | null
    gender?: $Enums.Gender | null
    sexuality?: $Enums.Sexuality | null
    pronouns?: string | null
    city?: $Enums.City | null
    transStatus?: $Enums.TransStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutUserDataInput
  }

  export type UserDataUncheckedCreateInput = {
    id?: number
    userId: string
    avatar?: string | null
    avatarUrl?: string | null
    nickname?: string | null
    description?: string | null
    bio?: string | null
    birth: Date | string
    heightCm?: number | null
    weightKg?: number | null
    gender?: $Enums.Gender | null
    sexuality?: $Enums.Sexuality | null
    pronouns?: string | null
    city?: $Enums.City | null
    transStatus?: $Enums.TransStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDataUpdateInput = {
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    sexuality?: NullableEnumSexualityFieldUpdateOperationsInput | $Enums.Sexuality | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableEnumCityFieldUpdateOperationsInput | $Enums.City | null
    transStatus?: NullableEnumTransStatusFieldUpdateOperationsInput | $Enums.TransStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutUserDataNestedInput
  }

  export type UserDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    sexuality?: NullableEnumSexualityFieldUpdateOperationsInput | $Enums.Sexuality | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableEnumCityFieldUpdateOperationsInput | $Enums.City | null
    transStatus?: NullableEnumTransStatusFieldUpdateOperationsInput | $Enums.TransStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDataCreateManyInput = {
    id?: number
    userId: string
    avatar?: string | null
    avatarUrl?: string | null
    nickname?: string | null
    description?: string | null
    bio?: string | null
    birth: Date | string
    heightCm?: number | null
    weightKg?: number | null
    gender?: $Enums.Gender | null
    sexuality?: $Enums.Sexuality | null
    pronouns?: string | null
    city?: $Enums.City | null
    transStatus?: $Enums.TransStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDataUpdateManyMutationInput = {
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    sexuality?: NullableEnumSexualityFieldUpdateOperationsInput | $Enums.Sexuality | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableEnumCityFieldUpdateOperationsInput | $Enums.City | null
    transStatus?: NullableEnumTransStatusFieldUpdateOperationsInput | $Enums.TransStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    sexuality?: NullableEnumSexualityFieldUpdateOperationsInput | $Enums.Sexuality | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableEnumCityFieldUpdateOperationsInput | $Enums.City | null
    transStatus?: NullableEnumTransStatusFieldUpdateOperationsInput | $Enums.TransStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceCreateInput = {
    minAge?: number | null
    maxAge?: number | null
    minHeightCm?: number | null
    maxHeightCm?: number | null
    maxDistanceKm?: number | null
    verifiedOnly?: boolean
    locationRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutUserPreferenceInput
  }

  export type UserPreferenceUncheckedCreateInput = {
    id?: number
    userId: string
    minAge?: number | null
    maxAge?: number | null
    minHeightCm?: number | null
    maxHeightCm?: number | null
    maxDistanceKm?: number | null
    verifiedOnly?: boolean
    locationRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUpdateInput = {
    minAge?: NullableIntFieldUpdateOperationsInput | number | null
    maxAge?: NullableIntFieldUpdateOperationsInput | number | null
    minHeightCm?: NullableIntFieldUpdateOperationsInput | number | null
    maxHeightCm?: NullableIntFieldUpdateOperationsInput | number | null
    maxDistanceKm?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedOnly?: BoolFieldUpdateOperationsInput | boolean
    locationRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutUserPreferenceNestedInput
  }

  export type UserPreferenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    minAge?: NullableIntFieldUpdateOperationsInput | number | null
    maxAge?: NullableIntFieldUpdateOperationsInput | number | null
    minHeightCm?: NullableIntFieldUpdateOperationsInput | number | null
    maxHeightCm?: NullableIntFieldUpdateOperationsInput | number | null
    maxDistanceKm?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedOnly?: BoolFieldUpdateOperationsInput | boolean
    locationRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceCreateManyInput = {
    id?: number
    userId: string
    minAge?: number | null
    maxAge?: number | null
    minHeightCm?: number | null
    maxHeightCm?: number | null
    maxDistanceKm?: number | null
    verifiedOnly?: boolean
    locationRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUpdateManyMutationInput = {
    minAge?: NullableIntFieldUpdateOperationsInput | number | null
    maxAge?: NullableIntFieldUpdateOperationsInput | number | null
    minHeightCm?: NullableIntFieldUpdateOperationsInput | number | null
    maxHeightCm?: NullableIntFieldUpdateOperationsInput | number | null
    maxDistanceKm?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedOnly?: BoolFieldUpdateOperationsInput | boolean
    locationRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    minAge?: NullableIntFieldUpdateOperationsInput | number | null
    maxAge?: NullableIntFieldUpdateOperationsInput | number | null
    minHeightCm?: NullableIntFieldUpdateOperationsInput | number | null
    maxHeightCm?: NullableIntFieldUpdateOperationsInput | number | null
    maxDistanceKm?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedOnly?: BoolFieldUpdateOperationsInput | boolean
    locationRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLookingForCreateInput = {
    value: $Enums.LookingFor
    user: UsersCreateNestedOneWithoutLookingForInput
  }

  export type UserLookingForUncheckedCreateInput = {
    id?: number
    userId: string
    value: $Enums.LookingFor
  }

  export type UserLookingForUpdateInput = {
    value?: EnumLookingForFieldUpdateOperationsInput | $Enums.LookingFor
    user?: UsersUpdateOneRequiredWithoutLookingForNestedInput
  }

  export type UserLookingForUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    value?: EnumLookingForFieldUpdateOperationsInput | $Enums.LookingFor
  }

  export type UserLookingForCreateManyInput = {
    id?: number
    userId: string
    value: $Enums.LookingFor
  }

  export type UserLookingForUpdateManyMutationInput = {
    value?: EnumLookingForFieldUpdateOperationsInput | $Enums.LookingFor
  }

  export type UserLookingForUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    value?: EnumLookingForFieldUpdateOperationsInput | $Enums.LookingFor
  }

  export type UserGenderInterestCreateInput = {
    value: $Enums.GenderInterest
    user: UsersCreateNestedOneWithoutGenderInterestInput
  }

  export type UserGenderInterestUncheckedCreateInput = {
    id?: number
    userId: string
    value: $Enums.GenderInterest
  }

  export type UserGenderInterestUpdateInput = {
    value?: EnumGenderInterestFieldUpdateOperationsInput | $Enums.GenderInterest
    user?: UsersUpdateOneRequiredWithoutGenderInterestNestedInput
  }

  export type UserGenderInterestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    value?: EnumGenderInterestFieldUpdateOperationsInput | $Enums.GenderInterest
  }

  export type UserGenderInterestCreateManyInput = {
    id?: number
    userId: string
    value: $Enums.GenderInterest
  }

  export type UserGenderInterestUpdateManyMutationInput = {
    value?: EnumGenderInterestFieldUpdateOperationsInput | $Enums.GenderInterest
  }

  export type UserGenderInterestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    value?: EnumGenderInterestFieldUpdateOperationsInput | $Enums.GenderInterest
  }

  export type UserSexualityInterestCreateInput = {
    value: $Enums.SexualityInterest
    user: UsersCreateNestedOneWithoutSexualityInteresInput
  }

  export type UserSexualityInterestUncheckedCreateInput = {
    id?: number
    userId: string
    value: $Enums.SexualityInterest
  }

  export type UserSexualityInterestUpdateInput = {
    value?: EnumSexualityInterestFieldUpdateOperationsInput | $Enums.SexualityInterest
    user?: UsersUpdateOneRequiredWithoutSexualityInteresNestedInput
  }

  export type UserSexualityInterestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    value?: EnumSexualityInterestFieldUpdateOperationsInput | $Enums.SexualityInterest
  }

  export type UserSexualityInterestCreateManyInput = {
    id?: number
    userId: string
    value: $Enums.SexualityInterest
  }

  export type UserSexualityInterestUpdateManyMutationInput = {
    value?: EnumSexualityInterestFieldUpdateOperationsInput | $Enums.SexualityInterest
  }

  export type UserSexualityInterestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    value?: EnumSexualityInterestFieldUpdateOperationsInput | $Enums.SexualityInterest
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumRelationshipStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipStatus | EnumRelationshipStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RelationshipStatus[] | ListEnumRelationshipStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RelationshipStatus[] | ListEnumRelationshipStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRelationshipStatusNullableFilter<$PrismaModel> | $Enums.RelationshipStatus | null
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type VerificationTokenListRelationFilter = {
    every?: VerificationTokenWhereInput
    some?: VerificationTokenWhereInput
    none?: VerificationTokenWhereInput
  }

  export type UserLookingForListRelationFilter = {
    every?: UserLookingForWhereInput
    some?: UserLookingForWhereInput
    none?: UserLookingForWhereInput
  }

  export type UserGenderInterestListRelationFilter = {
    every?: UserGenderInterestWhereInput
    some?: UserGenderInterestWhereInput
    none?: UserGenderInterestWhereInput
  }

  export type UserSexualityInterestListRelationFilter = {
    every?: UserSexualityInterestWhereInput
    some?: UserSexualityInterestWhereInput
    none?: UserSexualityInterestWhereInput
  }

  export type UserDataNullableScalarRelationFilter = {
    is?: UserDataWhereInput | null
    isNot?: UserDataWhereInput | null
  }

  export type UserPreferenceNullableScalarRelationFilter = {
    is?: UserPreferenceWhereInput | null
    isNot?: UserPreferenceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerificationTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLookingForOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserGenderInterestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSexualityInterestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    locationEnabled?: SortOrder
    locationUpdatedAt?: SortOrder
    role?: SortOrder
    relationshipStatus?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    locationEnabled?: SortOrder
    locationUpdatedAt?: SortOrder
    role?: SortOrder
    relationshipStatus?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    locationEnabled?: SortOrder
    locationUpdatedAt?: SortOrder
    role?: SortOrder
    relationshipStatus?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumRelationshipStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipStatus | EnumRelationshipStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RelationshipStatus[] | ListEnumRelationshipStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RelationshipStatus[] | ListEnumRelationshipStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRelationshipStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.RelationshipStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRelationshipStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumRelationshipStatusNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    replacedBy?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    replacedBy?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    replacedBy?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumVerificationTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationTokenType | EnumVerificationTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationTokenType[] | ListEnumVerificationTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationTokenType[] | ListEnumVerificationTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationTokenTypeFilter<$PrismaModel> | $Enums.VerificationTokenType
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumVerificationTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationTokenType | EnumVerificationTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationTokenType[] | ListEnumVerificationTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationTokenType[] | ListEnumVerificationTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.VerificationTokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumVerificationTokenTypeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type EnumSexualityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexuality | EnumSexualityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexuality[] | ListEnumSexualityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexuality[] | ListEnumSexualityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexualityNullableFilter<$PrismaModel> | $Enums.Sexuality | null
  }

  export type EnumCityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.City | EnumCityFieldRefInput<$PrismaModel> | null
    in?: $Enums.City[] | ListEnumCityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.City[] | ListEnumCityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCityNullableFilter<$PrismaModel> | $Enums.City | null
  }

  export type EnumTransStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TransStatus | EnumTransStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransStatus[] | ListEnumTransStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransStatus[] | ListEnumTransStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransStatusNullableFilter<$PrismaModel> | $Enums.TransStatus | null
  }

  export type UserDataCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    avatar?: SortOrder
    avatarUrl?: SortOrder
    nickname?: SortOrder
    description?: SortOrder
    bio?: SortOrder
    birth?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    gender?: SortOrder
    sexuality?: SortOrder
    pronouns?: SortOrder
    city?: SortOrder
    transStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserDataAvgOrderByAggregateInput = {
    id?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
  }

  export type UserDataMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    avatar?: SortOrder
    avatarUrl?: SortOrder
    nickname?: SortOrder
    description?: SortOrder
    bio?: SortOrder
    birth?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    gender?: SortOrder
    sexuality?: SortOrder
    pronouns?: SortOrder
    city?: SortOrder
    transStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserDataMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    avatar?: SortOrder
    avatarUrl?: SortOrder
    nickname?: SortOrder
    description?: SortOrder
    bio?: SortOrder
    birth?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    gender?: SortOrder
    sexuality?: SortOrder
    pronouns?: SortOrder
    city?: SortOrder
    transStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserDataSumOrderByAggregateInput = {
    id?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type EnumSexualityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexuality | EnumSexualityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexuality[] | ListEnumSexualityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexuality[] | ListEnumSexualityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexualityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sexuality | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexualityNullableFilter<$PrismaModel>
    _max?: NestedEnumSexualityNullableFilter<$PrismaModel>
  }

  export type EnumCityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.City | EnumCityFieldRefInput<$PrismaModel> | null
    in?: $Enums.City[] | ListEnumCityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.City[] | ListEnumCityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCityNullableWithAggregatesFilter<$PrismaModel> | $Enums.City | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCityNullableFilter<$PrismaModel>
    _max?: NestedEnumCityNullableFilter<$PrismaModel>
  }

  export type EnumTransStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransStatus | EnumTransStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransStatus[] | ListEnumTransStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransStatus[] | ListEnumTransStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TransStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumTransStatusNullableFilter<$PrismaModel>
  }

  export type UserPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    minHeightCm?: SortOrder
    maxHeightCm?: SortOrder
    maxDistanceKm?: SortOrder
    verifiedOnly?: SortOrder
    locationRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceAvgOrderByAggregateInput = {
    id?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    minHeightCm?: SortOrder
    maxHeightCm?: SortOrder
    maxDistanceKm?: SortOrder
  }

  export type UserPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    minHeightCm?: SortOrder
    maxHeightCm?: SortOrder
    maxDistanceKm?: SortOrder
    verifiedOnly?: SortOrder
    locationRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    minHeightCm?: SortOrder
    maxHeightCm?: SortOrder
    maxDistanceKm?: SortOrder
    verifiedOnly?: SortOrder
    locationRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceSumOrderByAggregateInput = {
    id?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    minHeightCm?: SortOrder
    maxHeightCm?: SortOrder
    maxDistanceKm?: SortOrder
  }

  export type EnumLookingForFilter<$PrismaModel = never> = {
    equals?: $Enums.LookingFor | EnumLookingForFieldRefInput<$PrismaModel>
    in?: $Enums.LookingFor[] | ListEnumLookingForFieldRefInput<$PrismaModel>
    notIn?: $Enums.LookingFor[] | ListEnumLookingForFieldRefInput<$PrismaModel>
    not?: NestedEnumLookingForFilter<$PrismaModel> | $Enums.LookingFor
  }

  export type UserLookingForUserIdValueCompoundUniqueInput = {
    userId: string
    value: $Enums.LookingFor
  }

  export type UserLookingForCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export type UserLookingForAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserLookingForMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export type UserLookingForMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export type UserLookingForSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumLookingForWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LookingFor | EnumLookingForFieldRefInput<$PrismaModel>
    in?: $Enums.LookingFor[] | ListEnumLookingForFieldRefInput<$PrismaModel>
    notIn?: $Enums.LookingFor[] | ListEnumLookingForFieldRefInput<$PrismaModel>
    not?: NestedEnumLookingForWithAggregatesFilter<$PrismaModel> | $Enums.LookingFor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLookingForFilter<$PrismaModel>
    _max?: NestedEnumLookingForFilter<$PrismaModel>
  }

  export type EnumGenderInterestFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderInterest | EnumGenderInterestFieldRefInput<$PrismaModel>
    in?: $Enums.GenderInterest[] | ListEnumGenderInterestFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderInterest[] | ListEnumGenderInterestFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderInterestFilter<$PrismaModel> | $Enums.GenderInterest
  }

  export type UserGenderInterestUserIdValueCompoundUniqueInput = {
    userId: string
    value: $Enums.GenderInterest
  }

  export type UserGenderInterestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export type UserGenderInterestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserGenderInterestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export type UserGenderInterestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export type UserGenderInterestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumGenderInterestWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderInterest | EnumGenderInterestFieldRefInput<$PrismaModel>
    in?: $Enums.GenderInterest[] | ListEnumGenderInterestFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderInterest[] | ListEnumGenderInterestFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderInterestWithAggregatesFilter<$PrismaModel> | $Enums.GenderInterest
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderInterestFilter<$PrismaModel>
    _max?: NestedEnumGenderInterestFilter<$PrismaModel>
  }

  export type EnumSexualityInterestFilter<$PrismaModel = never> = {
    equals?: $Enums.SexualityInterest | EnumSexualityInterestFieldRefInput<$PrismaModel>
    in?: $Enums.SexualityInterest[] | ListEnumSexualityInterestFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexualityInterest[] | ListEnumSexualityInterestFieldRefInput<$PrismaModel>
    not?: NestedEnumSexualityInterestFilter<$PrismaModel> | $Enums.SexualityInterest
  }

  export type UserSexualityInterestUserIdValueCompoundUniqueInput = {
    userId: string
    value: $Enums.SexualityInterest
  }

  export type UserSexualityInterestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export type UserSexualityInterestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserSexualityInterestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export type UserSexualityInterestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export type UserSexualityInterestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSexualityInterestWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SexualityInterest | EnumSexualityInterestFieldRefInput<$PrismaModel>
    in?: $Enums.SexualityInterest[] | ListEnumSexualityInterestFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexualityInterest[] | ListEnumSexualityInterestFieldRefInput<$PrismaModel>
    not?: NestedEnumSexualityInterestWithAggregatesFilter<$PrismaModel> | $Enums.SexualityInterest
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexualityInterestFilter<$PrismaModel>
    _max?: NestedEnumSexualityInterestFilter<$PrismaModel>
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type VerificationTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationTokenCreateWithoutUserInput, VerificationTokenUncheckedCreateWithoutUserInput> | VerificationTokenCreateWithoutUserInput[] | VerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationTokenCreateOrConnectWithoutUserInput | VerificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: VerificationTokenCreateManyUserInputEnvelope
    connect?: VerificationTokenWhereUniqueInput | VerificationTokenWhereUniqueInput[]
  }

  export type UserLookingForCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLookingForCreateWithoutUserInput, UserLookingForUncheckedCreateWithoutUserInput> | UserLookingForCreateWithoutUserInput[] | UserLookingForUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLookingForCreateOrConnectWithoutUserInput | UserLookingForCreateOrConnectWithoutUserInput[]
    createMany?: UserLookingForCreateManyUserInputEnvelope
    connect?: UserLookingForWhereUniqueInput | UserLookingForWhereUniqueInput[]
  }

  export type UserGenderInterestCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGenderInterestCreateWithoutUserInput, UserGenderInterestUncheckedCreateWithoutUserInput> | UserGenderInterestCreateWithoutUserInput[] | UserGenderInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGenderInterestCreateOrConnectWithoutUserInput | UserGenderInterestCreateOrConnectWithoutUserInput[]
    createMany?: UserGenderInterestCreateManyUserInputEnvelope
    connect?: UserGenderInterestWhereUniqueInput | UserGenderInterestWhereUniqueInput[]
  }

  export type UserSexualityInterestCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSexualityInterestCreateWithoutUserInput, UserSexualityInterestUncheckedCreateWithoutUserInput> | UserSexualityInterestCreateWithoutUserInput[] | UserSexualityInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSexualityInterestCreateOrConnectWithoutUserInput | UserSexualityInterestCreateOrConnectWithoutUserInput[]
    createMany?: UserSexualityInterestCreateManyUserInputEnvelope
    connect?: UserSexualityInterestWhereUniqueInput | UserSexualityInterestWhereUniqueInput[]
  }

  export type UserDataCreateNestedOneWithoutUserInput = {
    create?: XOR<UserDataCreateWithoutUserInput, UserDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDataCreateOrConnectWithoutUserInput
    connect?: UserDataWhereUniqueInput
  }

  export type UserPreferenceCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    connect?: UserPreferenceWhereUniqueInput
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type VerificationTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationTokenCreateWithoutUserInput, VerificationTokenUncheckedCreateWithoutUserInput> | VerificationTokenCreateWithoutUserInput[] | VerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationTokenCreateOrConnectWithoutUserInput | VerificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: VerificationTokenCreateManyUserInputEnvelope
    connect?: VerificationTokenWhereUniqueInput | VerificationTokenWhereUniqueInput[]
  }

  export type UserLookingForUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLookingForCreateWithoutUserInput, UserLookingForUncheckedCreateWithoutUserInput> | UserLookingForCreateWithoutUserInput[] | UserLookingForUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLookingForCreateOrConnectWithoutUserInput | UserLookingForCreateOrConnectWithoutUserInput[]
    createMany?: UserLookingForCreateManyUserInputEnvelope
    connect?: UserLookingForWhereUniqueInput | UserLookingForWhereUniqueInput[]
  }

  export type UserGenderInterestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGenderInterestCreateWithoutUserInput, UserGenderInterestUncheckedCreateWithoutUserInput> | UserGenderInterestCreateWithoutUserInput[] | UserGenderInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGenderInterestCreateOrConnectWithoutUserInput | UserGenderInterestCreateOrConnectWithoutUserInput[]
    createMany?: UserGenderInterestCreateManyUserInputEnvelope
    connect?: UserGenderInterestWhereUniqueInput | UserGenderInterestWhereUniqueInput[]
  }

  export type UserSexualityInterestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSexualityInterestCreateWithoutUserInput, UserSexualityInterestUncheckedCreateWithoutUserInput> | UserSexualityInterestCreateWithoutUserInput[] | UserSexualityInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSexualityInterestCreateOrConnectWithoutUserInput | UserSexualityInterestCreateOrConnectWithoutUserInput[]
    createMany?: UserSexualityInterestCreateManyUserInputEnvelope
    connect?: UserSexualityInterestWhereUniqueInput | UserSexualityInterestWhereUniqueInput[]
  }

  export type UserDataUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserDataCreateWithoutUserInput, UserDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDataCreateOrConnectWithoutUserInput
    connect?: UserDataWhereUniqueInput
  }

  export type UserPreferenceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    connect?: UserPreferenceWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableEnumRelationshipStatusFieldUpdateOperationsInput = {
    set?: $Enums.RelationshipStatus | null
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type VerificationTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationTokenCreateWithoutUserInput, VerificationTokenUncheckedCreateWithoutUserInput> | VerificationTokenCreateWithoutUserInput[] | VerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationTokenCreateOrConnectWithoutUserInput | VerificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: VerificationTokenUpsertWithWhereUniqueWithoutUserInput | VerificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationTokenCreateManyUserInputEnvelope
    set?: VerificationTokenWhereUniqueInput | VerificationTokenWhereUniqueInput[]
    disconnect?: VerificationTokenWhereUniqueInput | VerificationTokenWhereUniqueInput[]
    delete?: VerificationTokenWhereUniqueInput | VerificationTokenWhereUniqueInput[]
    connect?: VerificationTokenWhereUniqueInput | VerificationTokenWhereUniqueInput[]
    update?: VerificationTokenUpdateWithWhereUniqueWithoutUserInput | VerificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationTokenUpdateManyWithWhereWithoutUserInput | VerificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationTokenScalarWhereInput | VerificationTokenScalarWhereInput[]
  }

  export type UserLookingForUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLookingForCreateWithoutUserInput, UserLookingForUncheckedCreateWithoutUserInput> | UserLookingForCreateWithoutUserInput[] | UserLookingForUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLookingForCreateOrConnectWithoutUserInput | UserLookingForCreateOrConnectWithoutUserInput[]
    upsert?: UserLookingForUpsertWithWhereUniqueWithoutUserInput | UserLookingForUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLookingForCreateManyUserInputEnvelope
    set?: UserLookingForWhereUniqueInput | UserLookingForWhereUniqueInput[]
    disconnect?: UserLookingForWhereUniqueInput | UserLookingForWhereUniqueInput[]
    delete?: UserLookingForWhereUniqueInput | UserLookingForWhereUniqueInput[]
    connect?: UserLookingForWhereUniqueInput | UserLookingForWhereUniqueInput[]
    update?: UserLookingForUpdateWithWhereUniqueWithoutUserInput | UserLookingForUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLookingForUpdateManyWithWhereWithoutUserInput | UserLookingForUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLookingForScalarWhereInput | UserLookingForScalarWhereInput[]
  }

  export type UserGenderInterestUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGenderInterestCreateWithoutUserInput, UserGenderInterestUncheckedCreateWithoutUserInput> | UserGenderInterestCreateWithoutUserInput[] | UserGenderInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGenderInterestCreateOrConnectWithoutUserInput | UserGenderInterestCreateOrConnectWithoutUserInput[]
    upsert?: UserGenderInterestUpsertWithWhereUniqueWithoutUserInput | UserGenderInterestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGenderInterestCreateManyUserInputEnvelope
    set?: UserGenderInterestWhereUniqueInput | UserGenderInterestWhereUniqueInput[]
    disconnect?: UserGenderInterestWhereUniqueInput | UserGenderInterestWhereUniqueInput[]
    delete?: UserGenderInterestWhereUniqueInput | UserGenderInterestWhereUniqueInput[]
    connect?: UserGenderInterestWhereUniqueInput | UserGenderInterestWhereUniqueInput[]
    update?: UserGenderInterestUpdateWithWhereUniqueWithoutUserInput | UserGenderInterestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGenderInterestUpdateManyWithWhereWithoutUserInput | UserGenderInterestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGenderInterestScalarWhereInput | UserGenderInterestScalarWhereInput[]
  }

  export type UserSexualityInterestUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSexualityInterestCreateWithoutUserInput, UserSexualityInterestUncheckedCreateWithoutUserInput> | UserSexualityInterestCreateWithoutUserInput[] | UserSexualityInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSexualityInterestCreateOrConnectWithoutUserInput | UserSexualityInterestCreateOrConnectWithoutUserInput[]
    upsert?: UserSexualityInterestUpsertWithWhereUniqueWithoutUserInput | UserSexualityInterestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSexualityInterestCreateManyUserInputEnvelope
    set?: UserSexualityInterestWhereUniqueInput | UserSexualityInterestWhereUniqueInput[]
    disconnect?: UserSexualityInterestWhereUniqueInput | UserSexualityInterestWhereUniqueInput[]
    delete?: UserSexualityInterestWhereUniqueInput | UserSexualityInterestWhereUniqueInput[]
    connect?: UserSexualityInterestWhereUniqueInput | UserSexualityInterestWhereUniqueInput[]
    update?: UserSexualityInterestUpdateWithWhereUniqueWithoutUserInput | UserSexualityInterestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSexualityInterestUpdateManyWithWhereWithoutUserInput | UserSexualityInterestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSexualityInterestScalarWhereInput | UserSexualityInterestScalarWhereInput[]
  }

  export type UserDataUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserDataCreateWithoutUserInput, UserDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDataCreateOrConnectWithoutUserInput
    upsert?: UserDataUpsertWithoutUserInput
    disconnect?: UserDataWhereInput | boolean
    delete?: UserDataWhereInput | boolean
    connect?: UserDataWhereUniqueInput
    update?: XOR<XOR<UserDataUpdateToOneWithWhereWithoutUserInput, UserDataUpdateWithoutUserInput>, UserDataUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferenceUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    upsert?: UserPreferenceUpsertWithoutUserInput
    disconnect?: UserPreferenceWhereInput | boolean
    delete?: UserPreferenceWhereInput | boolean
    connect?: UserPreferenceWhereUniqueInput
    update?: XOR<XOR<UserPreferenceUpdateToOneWithWhereWithoutUserInput, UserPreferenceUpdateWithoutUserInput>, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type VerificationTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationTokenCreateWithoutUserInput, VerificationTokenUncheckedCreateWithoutUserInput> | VerificationTokenCreateWithoutUserInput[] | VerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationTokenCreateOrConnectWithoutUserInput | VerificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: VerificationTokenUpsertWithWhereUniqueWithoutUserInput | VerificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationTokenCreateManyUserInputEnvelope
    set?: VerificationTokenWhereUniqueInput | VerificationTokenWhereUniqueInput[]
    disconnect?: VerificationTokenWhereUniqueInput | VerificationTokenWhereUniqueInput[]
    delete?: VerificationTokenWhereUniqueInput | VerificationTokenWhereUniqueInput[]
    connect?: VerificationTokenWhereUniqueInput | VerificationTokenWhereUniqueInput[]
    update?: VerificationTokenUpdateWithWhereUniqueWithoutUserInput | VerificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationTokenUpdateManyWithWhereWithoutUserInput | VerificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationTokenScalarWhereInput | VerificationTokenScalarWhereInput[]
  }

  export type UserLookingForUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLookingForCreateWithoutUserInput, UserLookingForUncheckedCreateWithoutUserInput> | UserLookingForCreateWithoutUserInput[] | UserLookingForUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLookingForCreateOrConnectWithoutUserInput | UserLookingForCreateOrConnectWithoutUserInput[]
    upsert?: UserLookingForUpsertWithWhereUniqueWithoutUserInput | UserLookingForUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLookingForCreateManyUserInputEnvelope
    set?: UserLookingForWhereUniqueInput | UserLookingForWhereUniqueInput[]
    disconnect?: UserLookingForWhereUniqueInput | UserLookingForWhereUniqueInput[]
    delete?: UserLookingForWhereUniqueInput | UserLookingForWhereUniqueInput[]
    connect?: UserLookingForWhereUniqueInput | UserLookingForWhereUniqueInput[]
    update?: UserLookingForUpdateWithWhereUniqueWithoutUserInput | UserLookingForUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLookingForUpdateManyWithWhereWithoutUserInput | UserLookingForUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLookingForScalarWhereInput | UserLookingForScalarWhereInput[]
  }

  export type UserGenderInterestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGenderInterestCreateWithoutUserInput, UserGenderInterestUncheckedCreateWithoutUserInput> | UserGenderInterestCreateWithoutUserInput[] | UserGenderInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGenderInterestCreateOrConnectWithoutUserInput | UserGenderInterestCreateOrConnectWithoutUserInput[]
    upsert?: UserGenderInterestUpsertWithWhereUniqueWithoutUserInput | UserGenderInterestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGenderInterestCreateManyUserInputEnvelope
    set?: UserGenderInterestWhereUniqueInput | UserGenderInterestWhereUniqueInput[]
    disconnect?: UserGenderInterestWhereUniqueInput | UserGenderInterestWhereUniqueInput[]
    delete?: UserGenderInterestWhereUniqueInput | UserGenderInterestWhereUniqueInput[]
    connect?: UserGenderInterestWhereUniqueInput | UserGenderInterestWhereUniqueInput[]
    update?: UserGenderInterestUpdateWithWhereUniqueWithoutUserInput | UserGenderInterestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGenderInterestUpdateManyWithWhereWithoutUserInput | UserGenderInterestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGenderInterestScalarWhereInput | UserGenderInterestScalarWhereInput[]
  }

  export type UserSexualityInterestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSexualityInterestCreateWithoutUserInput, UserSexualityInterestUncheckedCreateWithoutUserInput> | UserSexualityInterestCreateWithoutUserInput[] | UserSexualityInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSexualityInterestCreateOrConnectWithoutUserInput | UserSexualityInterestCreateOrConnectWithoutUserInput[]
    upsert?: UserSexualityInterestUpsertWithWhereUniqueWithoutUserInput | UserSexualityInterestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSexualityInterestCreateManyUserInputEnvelope
    set?: UserSexualityInterestWhereUniqueInput | UserSexualityInterestWhereUniqueInput[]
    disconnect?: UserSexualityInterestWhereUniqueInput | UserSexualityInterestWhereUniqueInput[]
    delete?: UserSexualityInterestWhereUniqueInput | UserSexualityInterestWhereUniqueInput[]
    connect?: UserSexualityInterestWhereUniqueInput | UserSexualityInterestWhereUniqueInput[]
    update?: UserSexualityInterestUpdateWithWhereUniqueWithoutUserInput | UserSexualityInterestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSexualityInterestUpdateManyWithWhereWithoutUserInput | UserSexualityInterestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSexualityInterestScalarWhereInput | UserSexualityInterestScalarWhereInput[]
  }

  export type UserDataUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserDataCreateWithoutUserInput, UserDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDataCreateOrConnectWithoutUserInput
    upsert?: UserDataUpsertWithoutUserInput
    disconnect?: UserDataWhereInput | boolean
    delete?: UserDataWhereInput | boolean
    connect?: UserDataWhereUniqueInput
    update?: XOR<XOR<UserDataUpdateToOneWithWhereWithoutUserInput, UserDataUpdateWithoutUserInput>, UserDataUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferenceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    upsert?: UserPreferenceUpsertWithoutUserInput
    disconnect?: UserPreferenceWhereInput | boolean
    delete?: UserPreferenceWhereInput | boolean
    connect?: UserPreferenceWhereUniqueInput
    update?: XOR<XOR<UserPreferenceUpdateToOneWithWhereWithoutUserInput, UserPreferenceUpdateWithoutUserInput>, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UsersCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UsersCreateWithoutRefreshTokensInput, UsersUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRefreshTokensInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsersUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UsersCreateWithoutRefreshTokensInput, UsersUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRefreshTokensInput
    upsert?: UsersUpsertWithoutRefreshTokensInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRefreshTokensInput, UsersUpdateWithoutRefreshTokensInput>, UsersUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UsersCreateNestedOneWithoutVerificationTokensInput = {
    create?: XOR<UsersCreateWithoutVerificationTokensInput, UsersUncheckedCreateWithoutVerificationTokensInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVerificationTokensInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumVerificationTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.VerificationTokenType
  }

  export type UsersUpdateOneRequiredWithoutVerificationTokensNestedInput = {
    create?: XOR<UsersCreateWithoutVerificationTokensInput, UsersUncheckedCreateWithoutVerificationTokensInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVerificationTokensInput
    upsert?: UsersUpsertWithoutVerificationTokensInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutVerificationTokensInput, UsersUpdateWithoutVerificationTokensInput>, UsersUncheckedUpdateWithoutVerificationTokensInput>
  }

  export type UsersCreateNestedOneWithoutUserDataInput = {
    create?: XOR<UsersCreateWithoutUserDataInput, UsersUncheckedCreateWithoutUserDataInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserDataInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableEnumSexualityFieldUpdateOperationsInput = {
    set?: $Enums.Sexuality | null
  }

  export type NullableEnumCityFieldUpdateOperationsInput = {
    set?: $Enums.City | null
  }

  export type NullableEnumTransStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransStatus | null
  }

  export type UsersUpdateOneRequiredWithoutUserDataNestedInput = {
    create?: XOR<UsersCreateWithoutUserDataInput, UsersUncheckedCreateWithoutUserDataInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserDataInput
    upsert?: UsersUpsertWithoutUserDataInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserDataInput, UsersUpdateWithoutUserDataInput>, UsersUncheckedUpdateWithoutUserDataInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersCreateNestedOneWithoutUserPreferenceInput = {
    create?: XOR<UsersCreateWithoutUserPreferenceInput, UsersUncheckedCreateWithoutUserPreferenceInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserPreferenceInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUserPreferenceNestedInput = {
    create?: XOR<UsersCreateWithoutUserPreferenceInput, UsersUncheckedCreateWithoutUserPreferenceInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserPreferenceInput
    upsert?: UsersUpsertWithoutUserPreferenceInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserPreferenceInput, UsersUpdateWithoutUserPreferenceInput>, UsersUncheckedUpdateWithoutUserPreferenceInput>
  }

  export type UsersCreateNestedOneWithoutLookingForInput = {
    create?: XOR<UsersCreateWithoutLookingForInput, UsersUncheckedCreateWithoutLookingForInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLookingForInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumLookingForFieldUpdateOperationsInput = {
    set?: $Enums.LookingFor
  }

  export type UsersUpdateOneRequiredWithoutLookingForNestedInput = {
    create?: XOR<UsersCreateWithoutLookingForInput, UsersUncheckedCreateWithoutLookingForInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLookingForInput
    upsert?: UsersUpsertWithoutLookingForInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLookingForInput, UsersUpdateWithoutLookingForInput>, UsersUncheckedUpdateWithoutLookingForInput>
  }

  export type UsersCreateNestedOneWithoutGenderInterestInput = {
    create?: XOR<UsersCreateWithoutGenderInterestInput, UsersUncheckedCreateWithoutGenderInterestInput>
    connectOrCreate?: UsersCreateOrConnectWithoutGenderInterestInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumGenderInterestFieldUpdateOperationsInput = {
    set?: $Enums.GenderInterest
  }

  export type UsersUpdateOneRequiredWithoutGenderInterestNestedInput = {
    create?: XOR<UsersCreateWithoutGenderInterestInput, UsersUncheckedCreateWithoutGenderInterestInput>
    connectOrCreate?: UsersCreateOrConnectWithoutGenderInterestInput
    upsert?: UsersUpsertWithoutGenderInterestInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutGenderInterestInput, UsersUpdateWithoutGenderInterestInput>, UsersUncheckedUpdateWithoutGenderInterestInput>
  }

  export type UsersCreateNestedOneWithoutSexualityInteresInput = {
    create?: XOR<UsersCreateWithoutSexualityInteresInput, UsersUncheckedCreateWithoutSexualityInteresInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSexualityInteresInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumSexualityInterestFieldUpdateOperationsInput = {
    set?: $Enums.SexualityInterest
  }

  export type UsersUpdateOneRequiredWithoutSexualityInteresNestedInput = {
    create?: XOR<UsersCreateWithoutSexualityInteresInput, UsersUncheckedCreateWithoutSexualityInteresInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSexualityInteresInput
    upsert?: UsersUpsertWithoutSexualityInteresInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSexualityInteresInput, UsersUpdateWithoutSexualityInteresInput>, UsersUncheckedUpdateWithoutSexualityInteresInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumRelationshipStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipStatus | EnumRelationshipStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RelationshipStatus[] | ListEnumRelationshipStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RelationshipStatus[] | ListEnumRelationshipStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRelationshipStatusNullableFilter<$PrismaModel> | $Enums.RelationshipStatus | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumRelationshipStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipStatus | EnumRelationshipStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RelationshipStatus[] | ListEnumRelationshipStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RelationshipStatus[] | ListEnumRelationshipStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRelationshipStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.RelationshipStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRelationshipStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumRelationshipStatusNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumVerificationTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationTokenType | EnumVerificationTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationTokenType[] | ListEnumVerificationTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationTokenType[] | ListEnumVerificationTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationTokenTypeFilter<$PrismaModel> | $Enums.VerificationTokenType
  }

  export type NestedEnumVerificationTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationTokenType | EnumVerificationTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationTokenType[] | ListEnumVerificationTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationTokenType[] | ListEnumVerificationTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.VerificationTokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumVerificationTokenTypeFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumSexualityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexuality | EnumSexualityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexuality[] | ListEnumSexualityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexuality[] | ListEnumSexualityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexualityNullableFilter<$PrismaModel> | $Enums.Sexuality | null
  }

  export type NestedEnumCityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.City | EnumCityFieldRefInput<$PrismaModel> | null
    in?: $Enums.City[] | ListEnumCityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.City[] | ListEnumCityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCityNullableFilter<$PrismaModel> | $Enums.City | null
  }

  export type NestedEnumTransStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TransStatus | EnumTransStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransStatus[] | ListEnumTransStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransStatus[] | ListEnumTransStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransStatusNullableFilter<$PrismaModel> | $Enums.TransStatus | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumSexualityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexuality | EnumSexualityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexuality[] | ListEnumSexualityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexuality[] | ListEnumSexualityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexualityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sexuality | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexualityNullableFilter<$PrismaModel>
    _max?: NestedEnumSexualityNullableFilter<$PrismaModel>
  }

  export type NestedEnumCityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.City | EnumCityFieldRefInput<$PrismaModel> | null
    in?: $Enums.City[] | ListEnumCityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.City[] | ListEnumCityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCityNullableWithAggregatesFilter<$PrismaModel> | $Enums.City | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCityNullableFilter<$PrismaModel>
    _max?: NestedEnumCityNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransStatus | EnumTransStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransStatus[] | ListEnumTransStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransStatus[] | ListEnumTransStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TransStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumTransStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumLookingForFilter<$PrismaModel = never> = {
    equals?: $Enums.LookingFor | EnumLookingForFieldRefInput<$PrismaModel>
    in?: $Enums.LookingFor[] | ListEnumLookingForFieldRefInput<$PrismaModel>
    notIn?: $Enums.LookingFor[] | ListEnumLookingForFieldRefInput<$PrismaModel>
    not?: NestedEnumLookingForFilter<$PrismaModel> | $Enums.LookingFor
  }

  export type NestedEnumLookingForWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LookingFor | EnumLookingForFieldRefInput<$PrismaModel>
    in?: $Enums.LookingFor[] | ListEnumLookingForFieldRefInput<$PrismaModel>
    notIn?: $Enums.LookingFor[] | ListEnumLookingForFieldRefInput<$PrismaModel>
    not?: NestedEnumLookingForWithAggregatesFilter<$PrismaModel> | $Enums.LookingFor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLookingForFilter<$PrismaModel>
    _max?: NestedEnumLookingForFilter<$PrismaModel>
  }

  export type NestedEnumGenderInterestFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderInterest | EnumGenderInterestFieldRefInput<$PrismaModel>
    in?: $Enums.GenderInterest[] | ListEnumGenderInterestFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderInterest[] | ListEnumGenderInterestFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderInterestFilter<$PrismaModel> | $Enums.GenderInterest
  }

  export type NestedEnumGenderInterestWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderInterest | EnumGenderInterestFieldRefInput<$PrismaModel>
    in?: $Enums.GenderInterest[] | ListEnumGenderInterestFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderInterest[] | ListEnumGenderInterestFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderInterestWithAggregatesFilter<$PrismaModel> | $Enums.GenderInterest
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderInterestFilter<$PrismaModel>
    _max?: NestedEnumGenderInterestFilter<$PrismaModel>
  }

  export type NestedEnumSexualityInterestFilter<$PrismaModel = never> = {
    equals?: $Enums.SexualityInterest | EnumSexualityInterestFieldRefInput<$PrismaModel>
    in?: $Enums.SexualityInterest[] | ListEnumSexualityInterestFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexualityInterest[] | ListEnumSexualityInterestFieldRefInput<$PrismaModel>
    not?: NestedEnumSexualityInterestFilter<$PrismaModel> | $Enums.SexualityInterest
  }

  export type NestedEnumSexualityInterestWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SexualityInterest | EnumSexualityInterestFieldRefInput<$PrismaModel>
    in?: $Enums.SexualityInterest[] | ListEnumSexualityInterestFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexualityInterest[] | ListEnumSexualityInterestFieldRefInput<$PrismaModel>
    not?: NestedEnumSexualityInterestWithAggregatesFilter<$PrismaModel> | $Enums.SexualityInterest
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexualityInterestFilter<$PrismaModel>
    _max?: NestedEnumSexualityInterestFilter<$PrismaModel>
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedBy?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedBy?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VerificationTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    type: $Enums.VerificationTokenType
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    type: $Enums.VerificationTokenType
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationTokenCreateOrConnectWithoutUserInput = {
    where: VerificationTokenWhereUniqueInput
    create: XOR<VerificationTokenCreateWithoutUserInput, VerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type VerificationTokenCreateManyUserInputEnvelope = {
    data: VerificationTokenCreateManyUserInput | VerificationTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserLookingForCreateWithoutUserInput = {
    value: $Enums.LookingFor
  }

  export type UserLookingForUncheckedCreateWithoutUserInput = {
    id?: number
    value: $Enums.LookingFor
  }

  export type UserLookingForCreateOrConnectWithoutUserInput = {
    where: UserLookingForWhereUniqueInput
    create: XOR<UserLookingForCreateWithoutUserInput, UserLookingForUncheckedCreateWithoutUserInput>
  }

  export type UserLookingForCreateManyUserInputEnvelope = {
    data: UserLookingForCreateManyUserInput | UserLookingForCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserGenderInterestCreateWithoutUserInput = {
    value: $Enums.GenderInterest
  }

  export type UserGenderInterestUncheckedCreateWithoutUserInput = {
    id?: number
    value: $Enums.GenderInterest
  }

  export type UserGenderInterestCreateOrConnectWithoutUserInput = {
    where: UserGenderInterestWhereUniqueInput
    create: XOR<UserGenderInterestCreateWithoutUserInput, UserGenderInterestUncheckedCreateWithoutUserInput>
  }

  export type UserGenderInterestCreateManyUserInputEnvelope = {
    data: UserGenderInterestCreateManyUserInput | UserGenderInterestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSexualityInterestCreateWithoutUserInput = {
    value: $Enums.SexualityInterest
  }

  export type UserSexualityInterestUncheckedCreateWithoutUserInput = {
    id?: number
    value: $Enums.SexualityInterest
  }

  export type UserSexualityInterestCreateOrConnectWithoutUserInput = {
    where: UserSexualityInterestWhereUniqueInput
    create: XOR<UserSexualityInterestCreateWithoutUserInput, UserSexualityInterestUncheckedCreateWithoutUserInput>
  }

  export type UserSexualityInterestCreateManyUserInputEnvelope = {
    data: UserSexualityInterestCreateManyUserInput | UserSexualityInterestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDataCreateWithoutUserInput = {
    avatar?: string | null
    avatarUrl?: string | null
    nickname?: string | null
    description?: string | null
    bio?: string | null
    birth: Date | string
    heightCm?: number | null
    weightKg?: number | null
    gender?: $Enums.Gender | null
    sexuality?: $Enums.Sexuality | null
    pronouns?: string | null
    city?: $Enums.City | null
    transStatus?: $Enums.TransStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDataUncheckedCreateWithoutUserInput = {
    id?: number
    avatar?: string | null
    avatarUrl?: string | null
    nickname?: string | null
    description?: string | null
    bio?: string | null
    birth: Date | string
    heightCm?: number | null
    weightKg?: number | null
    gender?: $Enums.Gender | null
    sexuality?: $Enums.Sexuality | null
    pronouns?: string | null
    city?: $Enums.City | null
    transStatus?: $Enums.TransStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDataCreateOrConnectWithoutUserInput = {
    where: UserDataWhereUniqueInput
    create: XOR<UserDataCreateWithoutUserInput, UserDataUncheckedCreateWithoutUserInput>
  }

  export type UserPreferenceCreateWithoutUserInput = {
    minAge?: number | null
    maxAge?: number | null
    minHeightCm?: number | null
    maxHeightCm?: number | null
    maxDistanceKm?: number | null
    verifiedOnly?: boolean
    locationRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUncheckedCreateWithoutUserInput = {
    id?: number
    minAge?: number | null
    maxAge?: number | null
    minHeightCm?: number | null
    maxHeightCm?: number | null
    maxDistanceKm?: number | null
    verifiedOnly?: boolean
    locationRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceCreateOrConnectWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    replacedBy?: StringNullableFilter<"RefreshToken"> | string | null
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    ipAddress?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type VerificationTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: VerificationTokenWhereUniqueInput
    update: XOR<VerificationTokenUpdateWithoutUserInput, VerificationTokenUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationTokenCreateWithoutUserInput, VerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type VerificationTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: VerificationTokenWhereUniqueInput
    data: XOR<VerificationTokenUpdateWithoutUserInput, VerificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type VerificationTokenUpdateManyWithWhereWithoutUserInput = {
    where: VerificationTokenScalarWhereInput
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type VerificationTokenScalarWhereInput = {
    AND?: VerificationTokenScalarWhereInput | VerificationTokenScalarWhereInput[]
    OR?: VerificationTokenScalarWhereInput[]
    NOT?: VerificationTokenScalarWhereInput | VerificationTokenScalarWhereInput[]
    id?: StringFilter<"VerificationToken"> | string
    tokenHash?: StringFilter<"VerificationToken"> | string
    userId?: StringFilter<"VerificationToken"> | string
    type?: EnumVerificationTokenTypeFilter<"VerificationToken"> | $Enums.VerificationTokenType
    expiresAt?: DateTimeFilter<"VerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type UserLookingForUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLookingForWhereUniqueInput
    update: XOR<UserLookingForUpdateWithoutUserInput, UserLookingForUncheckedUpdateWithoutUserInput>
    create: XOR<UserLookingForCreateWithoutUserInput, UserLookingForUncheckedCreateWithoutUserInput>
  }

  export type UserLookingForUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLookingForWhereUniqueInput
    data: XOR<UserLookingForUpdateWithoutUserInput, UserLookingForUncheckedUpdateWithoutUserInput>
  }

  export type UserLookingForUpdateManyWithWhereWithoutUserInput = {
    where: UserLookingForScalarWhereInput
    data: XOR<UserLookingForUpdateManyMutationInput, UserLookingForUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLookingForScalarWhereInput = {
    AND?: UserLookingForScalarWhereInput | UserLookingForScalarWhereInput[]
    OR?: UserLookingForScalarWhereInput[]
    NOT?: UserLookingForScalarWhereInput | UserLookingForScalarWhereInput[]
    id?: IntFilter<"UserLookingFor"> | number
    userId?: StringFilter<"UserLookingFor"> | string
    value?: EnumLookingForFilter<"UserLookingFor"> | $Enums.LookingFor
  }

  export type UserGenderInterestUpsertWithWhereUniqueWithoutUserInput = {
    where: UserGenderInterestWhereUniqueInput
    update: XOR<UserGenderInterestUpdateWithoutUserInput, UserGenderInterestUncheckedUpdateWithoutUserInput>
    create: XOR<UserGenderInterestCreateWithoutUserInput, UserGenderInterestUncheckedCreateWithoutUserInput>
  }

  export type UserGenderInterestUpdateWithWhereUniqueWithoutUserInput = {
    where: UserGenderInterestWhereUniqueInput
    data: XOR<UserGenderInterestUpdateWithoutUserInput, UserGenderInterestUncheckedUpdateWithoutUserInput>
  }

  export type UserGenderInterestUpdateManyWithWhereWithoutUserInput = {
    where: UserGenderInterestScalarWhereInput
    data: XOR<UserGenderInterestUpdateManyMutationInput, UserGenderInterestUncheckedUpdateManyWithoutUserInput>
  }

  export type UserGenderInterestScalarWhereInput = {
    AND?: UserGenderInterestScalarWhereInput | UserGenderInterestScalarWhereInput[]
    OR?: UserGenderInterestScalarWhereInput[]
    NOT?: UserGenderInterestScalarWhereInput | UserGenderInterestScalarWhereInput[]
    id?: IntFilter<"UserGenderInterest"> | number
    userId?: StringFilter<"UserGenderInterest"> | string
    value?: EnumGenderInterestFilter<"UserGenderInterest"> | $Enums.GenderInterest
  }

  export type UserSexualityInterestUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSexualityInterestWhereUniqueInput
    update: XOR<UserSexualityInterestUpdateWithoutUserInput, UserSexualityInterestUncheckedUpdateWithoutUserInput>
    create: XOR<UserSexualityInterestCreateWithoutUserInput, UserSexualityInterestUncheckedCreateWithoutUserInput>
  }

  export type UserSexualityInterestUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSexualityInterestWhereUniqueInput
    data: XOR<UserSexualityInterestUpdateWithoutUserInput, UserSexualityInterestUncheckedUpdateWithoutUserInput>
  }

  export type UserSexualityInterestUpdateManyWithWhereWithoutUserInput = {
    where: UserSexualityInterestScalarWhereInput
    data: XOR<UserSexualityInterestUpdateManyMutationInput, UserSexualityInterestUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSexualityInterestScalarWhereInput = {
    AND?: UserSexualityInterestScalarWhereInput | UserSexualityInterestScalarWhereInput[]
    OR?: UserSexualityInterestScalarWhereInput[]
    NOT?: UserSexualityInterestScalarWhereInput | UserSexualityInterestScalarWhereInput[]
    id?: IntFilter<"UserSexualityInterest"> | number
    userId?: StringFilter<"UserSexualityInterest"> | string
    value?: EnumSexualityInterestFilter<"UserSexualityInterest"> | $Enums.SexualityInterest
  }

  export type UserDataUpsertWithoutUserInput = {
    update: XOR<UserDataUpdateWithoutUserInput, UserDataUncheckedUpdateWithoutUserInput>
    create: XOR<UserDataCreateWithoutUserInput, UserDataUncheckedCreateWithoutUserInput>
    where?: UserDataWhereInput
  }

  export type UserDataUpdateToOneWithWhereWithoutUserInput = {
    where?: UserDataWhereInput
    data: XOR<UserDataUpdateWithoutUserInput, UserDataUncheckedUpdateWithoutUserInput>
  }

  export type UserDataUpdateWithoutUserInput = {
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    sexuality?: NullableEnumSexualityFieldUpdateOperationsInput | $Enums.Sexuality | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableEnumCityFieldUpdateOperationsInput | $Enums.City | null
    transStatus?: NullableEnumTransStatusFieldUpdateOperationsInput | $Enums.TransStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDataUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    sexuality?: NullableEnumSexualityFieldUpdateOperationsInput | $Enums.Sexuality | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableEnumCityFieldUpdateOperationsInput | $Enums.City | null
    transStatus?: NullableEnumTransStatusFieldUpdateOperationsInput | $Enums.TransStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUpsertWithoutUserInput = {
    update: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    where?: UserPreferenceWhereInput
  }

  export type UserPreferenceUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferenceWhereInput
    data: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferenceUpdateWithoutUserInput = {
    minAge?: NullableIntFieldUpdateOperationsInput | number | null
    maxAge?: NullableIntFieldUpdateOperationsInput | number | null
    minHeightCm?: NullableIntFieldUpdateOperationsInput | number | null
    maxHeightCm?: NullableIntFieldUpdateOperationsInput | number | null
    maxDistanceKm?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedOnly?: BoolFieldUpdateOperationsInput | boolean
    locationRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    minAge?: NullableIntFieldUpdateOperationsInput | number | null
    maxAge?: NullableIntFieldUpdateOperationsInput | number | null
    minHeightCm?: NullableIntFieldUpdateOperationsInput | number | null
    maxHeightCm?: NullableIntFieldUpdateOperationsInput | number | null
    maxDistanceKm?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedOnly?: BoolFieldUpdateOperationsInput | boolean
    locationRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateWithoutRefreshTokensInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    verificationTokens?: VerificationTokenCreateNestedManyWithoutUserInput
    lookingFor?: UserLookingForCreateNestedManyWithoutUserInput
    genderInterest?: UserGenderInterestCreateNestedManyWithoutUserInput
    sexualityInteres?: UserSexualityInterestCreateNestedManyWithoutUserInput
    userData?: UserDataCreateNestedOneWithoutUserInput
    userPreference?: UserPreferenceCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    verificationTokens?: VerificationTokenUncheckedCreateNestedManyWithoutUserInput
    lookingFor?: UserLookingForUncheckedCreateNestedManyWithoutUserInput
    genderInterest?: UserGenderInterestUncheckedCreateNestedManyWithoutUserInput
    sexualityInteres?: UserSexualityInterestUncheckedCreateNestedManyWithoutUserInput
    userData?: UserDataUncheckedCreateNestedOneWithoutUserInput
    userPreference?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutRefreshTokensInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRefreshTokensInput, UsersUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UsersUpsertWithoutRefreshTokensInput = {
    update: XOR<UsersUpdateWithoutRefreshTokensInput, UsersUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UsersCreateWithoutRefreshTokensInput, UsersUncheckedCreateWithoutRefreshTokensInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutRefreshTokensInput, UsersUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UsersUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    verificationTokens?: VerificationTokenUpdateManyWithoutUserNestedInput
    lookingFor?: UserLookingForUpdateManyWithoutUserNestedInput
    genderInterest?: UserGenderInterestUpdateManyWithoutUserNestedInput
    sexualityInteres?: UserSexualityInterestUpdateManyWithoutUserNestedInput
    userData?: UserDataUpdateOneWithoutUserNestedInput
    userPreference?: UserPreferenceUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    verificationTokens?: VerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    lookingFor?: UserLookingForUncheckedUpdateManyWithoutUserNestedInput
    genderInterest?: UserGenderInterestUncheckedUpdateManyWithoutUserNestedInput
    sexualityInteres?: UserSexualityInterestUncheckedUpdateManyWithoutUserNestedInput
    userData?: UserDataUncheckedUpdateOneWithoutUserNestedInput
    userPreference?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateWithoutVerificationTokensInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    lookingFor?: UserLookingForCreateNestedManyWithoutUserInput
    genderInterest?: UserGenderInterestCreateNestedManyWithoutUserInput
    sexualityInteres?: UserSexualityInterestCreateNestedManyWithoutUserInput
    userData?: UserDataCreateNestedOneWithoutUserInput
    userPreference?: UserPreferenceCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutVerificationTokensInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    lookingFor?: UserLookingForUncheckedCreateNestedManyWithoutUserInput
    genderInterest?: UserGenderInterestUncheckedCreateNestedManyWithoutUserInput
    sexualityInteres?: UserSexualityInterestUncheckedCreateNestedManyWithoutUserInput
    userData?: UserDataUncheckedCreateNestedOneWithoutUserInput
    userPreference?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutVerificationTokensInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutVerificationTokensInput, UsersUncheckedCreateWithoutVerificationTokensInput>
  }

  export type UsersUpsertWithoutVerificationTokensInput = {
    update: XOR<UsersUpdateWithoutVerificationTokensInput, UsersUncheckedUpdateWithoutVerificationTokensInput>
    create: XOR<UsersCreateWithoutVerificationTokensInput, UsersUncheckedCreateWithoutVerificationTokensInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutVerificationTokensInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutVerificationTokensInput, UsersUncheckedUpdateWithoutVerificationTokensInput>
  }

  export type UsersUpdateWithoutVerificationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    lookingFor?: UserLookingForUpdateManyWithoutUserNestedInput
    genderInterest?: UserGenderInterestUpdateManyWithoutUserNestedInput
    sexualityInteres?: UserSexualityInterestUpdateManyWithoutUserNestedInput
    userData?: UserDataUpdateOneWithoutUserNestedInput
    userPreference?: UserPreferenceUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutVerificationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    lookingFor?: UserLookingForUncheckedUpdateManyWithoutUserNestedInput
    genderInterest?: UserGenderInterestUncheckedUpdateManyWithoutUserNestedInput
    sexualityInteres?: UserSexualityInterestUncheckedUpdateManyWithoutUserNestedInput
    userData?: UserDataUncheckedUpdateOneWithoutUserNestedInput
    userPreference?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateWithoutUserDataInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    verificationTokens?: VerificationTokenCreateNestedManyWithoutUserInput
    lookingFor?: UserLookingForCreateNestedManyWithoutUserInput
    genderInterest?: UserGenderInterestCreateNestedManyWithoutUserInput
    sexualityInteres?: UserSexualityInterestCreateNestedManyWithoutUserInput
    userPreference?: UserPreferenceCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUserDataInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    verificationTokens?: VerificationTokenUncheckedCreateNestedManyWithoutUserInput
    lookingFor?: UserLookingForUncheckedCreateNestedManyWithoutUserInput
    genderInterest?: UserGenderInterestUncheckedCreateNestedManyWithoutUserInput
    sexualityInteres?: UserSexualityInterestUncheckedCreateNestedManyWithoutUserInput
    userPreference?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUserDataInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserDataInput, UsersUncheckedCreateWithoutUserDataInput>
  }

  export type UsersUpsertWithoutUserDataInput = {
    update: XOR<UsersUpdateWithoutUserDataInput, UsersUncheckedUpdateWithoutUserDataInput>
    create: XOR<UsersCreateWithoutUserDataInput, UsersUncheckedCreateWithoutUserDataInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserDataInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserDataInput, UsersUncheckedUpdateWithoutUserDataInput>
  }

  export type UsersUpdateWithoutUserDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    verificationTokens?: VerificationTokenUpdateManyWithoutUserNestedInput
    lookingFor?: UserLookingForUpdateManyWithoutUserNestedInput
    genderInterest?: UserGenderInterestUpdateManyWithoutUserNestedInput
    sexualityInteres?: UserSexualityInterestUpdateManyWithoutUserNestedInput
    userPreference?: UserPreferenceUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutUserDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    verificationTokens?: VerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    lookingFor?: UserLookingForUncheckedUpdateManyWithoutUserNestedInput
    genderInterest?: UserGenderInterestUncheckedUpdateManyWithoutUserNestedInput
    sexualityInteres?: UserSexualityInterestUncheckedUpdateManyWithoutUserNestedInput
    userPreference?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateWithoutUserPreferenceInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    verificationTokens?: VerificationTokenCreateNestedManyWithoutUserInput
    lookingFor?: UserLookingForCreateNestedManyWithoutUserInput
    genderInterest?: UserGenderInterestCreateNestedManyWithoutUserInput
    sexualityInteres?: UserSexualityInterestCreateNestedManyWithoutUserInput
    userData?: UserDataCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUserPreferenceInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    verificationTokens?: VerificationTokenUncheckedCreateNestedManyWithoutUserInput
    lookingFor?: UserLookingForUncheckedCreateNestedManyWithoutUserInput
    genderInterest?: UserGenderInterestUncheckedCreateNestedManyWithoutUserInput
    sexualityInteres?: UserSexualityInterestUncheckedCreateNestedManyWithoutUserInput
    userData?: UserDataUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUserPreferenceInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserPreferenceInput, UsersUncheckedCreateWithoutUserPreferenceInput>
  }

  export type UsersUpsertWithoutUserPreferenceInput = {
    update: XOR<UsersUpdateWithoutUserPreferenceInput, UsersUncheckedUpdateWithoutUserPreferenceInput>
    create: XOR<UsersCreateWithoutUserPreferenceInput, UsersUncheckedCreateWithoutUserPreferenceInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserPreferenceInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserPreferenceInput, UsersUncheckedUpdateWithoutUserPreferenceInput>
  }

  export type UsersUpdateWithoutUserPreferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    verificationTokens?: VerificationTokenUpdateManyWithoutUserNestedInput
    lookingFor?: UserLookingForUpdateManyWithoutUserNestedInput
    genderInterest?: UserGenderInterestUpdateManyWithoutUserNestedInput
    sexualityInteres?: UserSexualityInterestUpdateManyWithoutUserNestedInput
    userData?: UserDataUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutUserPreferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    verificationTokens?: VerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    lookingFor?: UserLookingForUncheckedUpdateManyWithoutUserNestedInput
    genderInterest?: UserGenderInterestUncheckedUpdateManyWithoutUserNestedInput
    sexualityInteres?: UserSexualityInterestUncheckedUpdateManyWithoutUserNestedInput
    userData?: UserDataUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateWithoutLookingForInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    verificationTokens?: VerificationTokenCreateNestedManyWithoutUserInput
    genderInterest?: UserGenderInterestCreateNestedManyWithoutUserInput
    sexualityInteres?: UserSexualityInterestCreateNestedManyWithoutUserInput
    userData?: UserDataCreateNestedOneWithoutUserInput
    userPreference?: UserPreferenceCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutLookingForInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    verificationTokens?: VerificationTokenUncheckedCreateNestedManyWithoutUserInput
    genderInterest?: UserGenderInterestUncheckedCreateNestedManyWithoutUserInput
    sexualityInteres?: UserSexualityInterestUncheckedCreateNestedManyWithoutUserInput
    userData?: UserDataUncheckedCreateNestedOneWithoutUserInput
    userPreference?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutLookingForInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLookingForInput, UsersUncheckedCreateWithoutLookingForInput>
  }

  export type UsersUpsertWithoutLookingForInput = {
    update: XOR<UsersUpdateWithoutLookingForInput, UsersUncheckedUpdateWithoutLookingForInput>
    create: XOR<UsersCreateWithoutLookingForInput, UsersUncheckedCreateWithoutLookingForInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLookingForInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLookingForInput, UsersUncheckedUpdateWithoutLookingForInput>
  }

  export type UsersUpdateWithoutLookingForInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    verificationTokens?: VerificationTokenUpdateManyWithoutUserNestedInput
    genderInterest?: UserGenderInterestUpdateManyWithoutUserNestedInput
    sexualityInteres?: UserSexualityInterestUpdateManyWithoutUserNestedInput
    userData?: UserDataUpdateOneWithoutUserNestedInput
    userPreference?: UserPreferenceUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutLookingForInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    verificationTokens?: VerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    genderInterest?: UserGenderInterestUncheckedUpdateManyWithoutUserNestedInput
    sexualityInteres?: UserSexualityInterestUncheckedUpdateManyWithoutUserNestedInput
    userData?: UserDataUncheckedUpdateOneWithoutUserNestedInput
    userPreference?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateWithoutGenderInterestInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    verificationTokens?: VerificationTokenCreateNestedManyWithoutUserInput
    lookingFor?: UserLookingForCreateNestedManyWithoutUserInput
    sexualityInteres?: UserSexualityInterestCreateNestedManyWithoutUserInput
    userData?: UserDataCreateNestedOneWithoutUserInput
    userPreference?: UserPreferenceCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutGenderInterestInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    verificationTokens?: VerificationTokenUncheckedCreateNestedManyWithoutUserInput
    lookingFor?: UserLookingForUncheckedCreateNestedManyWithoutUserInput
    sexualityInteres?: UserSexualityInterestUncheckedCreateNestedManyWithoutUserInput
    userData?: UserDataUncheckedCreateNestedOneWithoutUserInput
    userPreference?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutGenderInterestInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutGenderInterestInput, UsersUncheckedCreateWithoutGenderInterestInput>
  }

  export type UsersUpsertWithoutGenderInterestInput = {
    update: XOR<UsersUpdateWithoutGenderInterestInput, UsersUncheckedUpdateWithoutGenderInterestInput>
    create: XOR<UsersCreateWithoutGenderInterestInput, UsersUncheckedCreateWithoutGenderInterestInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutGenderInterestInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutGenderInterestInput, UsersUncheckedUpdateWithoutGenderInterestInput>
  }

  export type UsersUpdateWithoutGenderInterestInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    verificationTokens?: VerificationTokenUpdateManyWithoutUserNestedInput
    lookingFor?: UserLookingForUpdateManyWithoutUserNestedInput
    sexualityInteres?: UserSexualityInterestUpdateManyWithoutUserNestedInput
    userData?: UserDataUpdateOneWithoutUserNestedInput
    userPreference?: UserPreferenceUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutGenderInterestInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    verificationTokens?: VerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    lookingFor?: UserLookingForUncheckedUpdateManyWithoutUserNestedInput
    sexualityInteres?: UserSexualityInterestUncheckedUpdateManyWithoutUserNestedInput
    userData?: UserDataUncheckedUpdateOneWithoutUserNestedInput
    userPreference?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateWithoutSexualityInteresInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    verificationTokens?: VerificationTokenCreateNestedManyWithoutUserInput
    lookingFor?: UserLookingForCreateNestedManyWithoutUserInput
    genderInterest?: UserGenderInterestCreateNestedManyWithoutUserInput
    userData?: UserDataCreateNestedOneWithoutUserInput
    userPreference?: UserPreferenceCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSexualityInteresInput = {
    id?: string
    username: string
    email: string
    password: string
    passwordHash: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lat?: number | null
    lng?: number | null
    locationEnabled?: boolean
    locationUpdatedAt?: Date | string | null
    role?: $Enums.UserRole
    relationshipStatus?: $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    verificationTokens?: VerificationTokenUncheckedCreateNestedManyWithoutUserInput
    lookingFor?: UserLookingForUncheckedCreateNestedManyWithoutUserInput
    genderInterest?: UserGenderInterestUncheckedCreateNestedManyWithoutUserInput
    userData?: UserDataUncheckedCreateNestedOneWithoutUserInput
    userPreference?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSexualityInteresInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSexualityInteresInput, UsersUncheckedCreateWithoutSexualityInteresInput>
  }

  export type UsersUpsertWithoutSexualityInteresInput = {
    update: XOR<UsersUpdateWithoutSexualityInteresInput, UsersUncheckedUpdateWithoutSexualityInteresInput>
    create: XOR<UsersCreateWithoutSexualityInteresInput, UsersUncheckedCreateWithoutSexualityInteresInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSexualityInteresInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSexualityInteresInput, UsersUncheckedUpdateWithoutSexualityInteresInput>
  }

  export type UsersUpdateWithoutSexualityInteresInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    verificationTokens?: VerificationTokenUpdateManyWithoutUserNestedInput
    lookingFor?: UserLookingForUpdateManyWithoutUserNestedInput
    genderInterest?: UserGenderInterestUpdateManyWithoutUserNestedInput
    userData?: UserDataUpdateOneWithoutUserNestedInput
    userPreference?: UserPreferenceUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSexualityInteresInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationEnabled?: BoolFieldUpdateOperationsInput | boolean
    locationUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relationshipStatus?: NullableEnumRelationshipStatusFieldUpdateOperationsInput | $Enums.RelationshipStatus | null
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    verificationTokens?: VerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    lookingFor?: UserLookingForUncheckedUpdateManyWithoutUserNestedInput
    genderInterest?: UserGenderInterestUncheckedUpdateManyWithoutUserNestedInput
    userData?: UserDataUncheckedUpdateOneWithoutUserNestedInput
    userPreference?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedBy?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type VerificationTokenCreateManyUserInput = {
    id?: string
    tokenHash: string
    type: $Enums.VerificationTokenType
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserLookingForCreateManyUserInput = {
    id?: number
    value: $Enums.LookingFor
  }

  export type UserGenderInterestCreateManyUserInput = {
    id?: number
    value: $Enums.GenderInterest
  }

  export type UserSexualityInterestCreateManyUserInput = {
    id?: number
    value: $Enums.SexualityInterest
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationTokenTypeFieldUpdateOperationsInput | $Enums.VerificationTokenType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationTokenTypeFieldUpdateOperationsInput | $Enums.VerificationTokenType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationTokenTypeFieldUpdateOperationsInput | $Enums.VerificationTokenType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLookingForUpdateWithoutUserInput = {
    value?: EnumLookingForFieldUpdateOperationsInput | $Enums.LookingFor
  }

  export type UserLookingForUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: EnumLookingForFieldUpdateOperationsInput | $Enums.LookingFor
  }

  export type UserLookingForUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: EnumLookingForFieldUpdateOperationsInput | $Enums.LookingFor
  }

  export type UserGenderInterestUpdateWithoutUserInput = {
    value?: EnumGenderInterestFieldUpdateOperationsInput | $Enums.GenderInterest
  }

  export type UserGenderInterestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: EnumGenderInterestFieldUpdateOperationsInput | $Enums.GenderInterest
  }

  export type UserGenderInterestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: EnumGenderInterestFieldUpdateOperationsInput | $Enums.GenderInterest
  }

  export type UserSexualityInterestUpdateWithoutUserInput = {
    value?: EnumSexualityInterestFieldUpdateOperationsInput | $Enums.SexualityInterest
  }

  export type UserSexualityInterestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: EnumSexualityInterestFieldUpdateOperationsInput | $Enums.SexualityInterest
  }

  export type UserSexualityInterestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: EnumSexualityInterestFieldUpdateOperationsInput | $Enums.SexualityInterest
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}