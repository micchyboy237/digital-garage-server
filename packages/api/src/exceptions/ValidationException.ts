import { ErrorCode, ErrorMessage } from "./errors"

export class ValidationException extends Error {
  public readonly code: ErrorCode

  constructor(code: ErrorCode, messageArg?: ErrorMessage) {
    // const message = messageArg || ErrorMessages[code]
    const message = code
    super(message)
    this.name = "ValidationException"
    this.code = code
  }
}
