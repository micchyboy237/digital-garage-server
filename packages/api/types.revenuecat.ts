export interface SubscriberAttributes {
  $attConsentStatus: {
    value: string
    updated_at_ms: number
  }
}

export interface Event {
  event_timestamp_ms: number
  product_id: string
  period_type: string
  purchased_at_ms: number
  expiration_at_ms: number
  environment: string
  entitlement_id: string | null
  entitlement_ids: string[]
  presented_offering_id: string
  transaction_id: string
  original_transaction_id: string
  is_family_share: boolean
  country_code: string
  app_user_id: string
  aliases: string[]
  original_app_user_id: string
  currency: string
  price: number
  price_in_purchased_currency: number
  subscriber_attributes: SubscriberAttributes
  store: string
  takehome_percentage: number
  offer_code: string | null
  tax_percentage: number
  commission_percentage: number
  renewal_number: number
  type: string
  id: string
  app_id: string
}

export interface WebhookRequestBody {
  body: {
    event: Event
  }
}
