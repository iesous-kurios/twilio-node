/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

type CallSummariesCallDirection = 'outbound_api'|'outbound_dial'|'inbound'|'trunking_originating'|'trunking_terminating';

type CallSummariesCallState = 'ringing'|'completed'|'busy'|'fail'|'noanswer'|'canceled'|'answered'|'undialed';

type CallSummariesCallType = 'carrier'|'sip'|'trunking'|'client';

type CallSummariesProcessingState = 'complete'|'partial';

type CallSummariesProcessingStateRequest = 'completed'|'started'|'partial'|'all';

type CallSummariesSortBy = 'start_time'|'end_time';

/**
 * Initialize the CallSummariesList
 *
 * @param version - Version of the resource
 */
declare function CallSummariesList(version: V1): CallSummariesListInstance;

interface CallSummariesListInstance {
  /**
   * Streams CallSummariesInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: CallSummariesInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams CallSummariesInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: CallSummariesListInstanceEachOptions, callback?: (item: CallSummariesInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of CallSummariesInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
  /**
   * Retrieve a single target page of CallSummariesInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
  /**
   * Lists CallSummariesInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: CallSummariesInstance[]) => any): Promise<CallSummariesInstance[]>;
  /**
   * Lists CallSummariesInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CallSummariesListInstanceOptions, callback?: (error: Error | null, items: CallSummariesInstance[]) => any): Promise<CallSummariesInstance[]>;
  /**
   * Retrieve a single page of CallSummariesInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
  /**
   * Retrieve a single page of CallSummariesInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CallSummariesListInstancePageOptions, callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property abnormalSession - The abnormal_session
 * @property branded - The branded
 * @property callState - The call_state
 * @property callType - The call_type
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property direction - The direction
 * @property done - Function to be called upon completion of streaming
 * @property endTime - The end_time
 * @property from - The from
 * @property fromCarrier - The from_carrier
 * @property fromCountryCode - The from_country_code
 * @property hasTag - The has_tag
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property processingState - The processing_state
 * @property sortBy - The sort_by
 * @property startTime - The start_time
 * @property subaccount - The subaccount
 * @property to - The to
 * @property toCarrier - The to_carrier
 * @property toCountryCode - The to_country_code
 * @property verifiedCaller - The verified_caller
 */
interface CallSummariesListInstanceEachOptions {
  abnormalSession?: boolean;
  branded?: boolean;
  callState?: string | string[];
  callType?: string | string[];
  callback?: (item: CallSummariesInstance, done: (err?: Error) => void) => void;
  direction?: CallSummariesCallDirection;
  done?: Function;
  endTime?: string;
  from?: string | string[];
  fromCarrier?: string | string[];
  fromCountryCode?: string | string[];
  hasTag?: boolean;
  limit?: number;
  pageSize?: number;
  processingState?: CallSummariesProcessingStateRequest;
  sortBy?: CallSummariesSortBy;
  startTime?: string;
  subaccount?: string;
  to?: string | string[];
  toCarrier?: string | string[];
  toCountryCode?: string | string[];
  verifiedCaller?: boolean;
}

/**
 * Options to pass to list
 *
 * @property abnormalSession - The abnormal_session
 * @property branded - The branded
 * @property callState - The call_state
 * @property callType - The call_type
 * @property direction - The direction
 * @property endTime - The end_time
 * @property from - The from
 * @property fromCarrier - The from_carrier
 * @property fromCountryCode - The from_country_code
 * @property hasTag - The has_tag
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property processingState - The processing_state
 * @property sortBy - The sort_by
 * @property startTime - The start_time
 * @property subaccount - The subaccount
 * @property to - The to
 * @property toCarrier - The to_carrier
 * @property toCountryCode - The to_country_code
 * @property verifiedCaller - The verified_caller
 */
interface CallSummariesListInstanceOptions {
  abnormalSession?: boolean;
  branded?: boolean;
  callState?: string | string[];
  callType?: string | string[];
  direction?: CallSummariesCallDirection;
  endTime?: string;
  from?: string | string[];
  fromCarrier?: string | string[];
  fromCountryCode?: string | string[];
  hasTag?: boolean;
  limit?: number;
  pageSize?: number;
  processingState?: CallSummariesProcessingStateRequest;
  sortBy?: CallSummariesSortBy;
  startTime?: string;
  subaccount?: string;
  to?: string | string[];
  toCarrier?: string | string[];
  toCountryCode?: string | string[];
  verifiedCaller?: boolean;
}

/**
 * Options to pass to page
 *
 * @property abnormalSession - The abnormal_session
 * @property branded - The branded
 * @property callState - The call_state
 * @property callType - The call_type
 * @property direction - The direction
 * @property endTime - The end_time
 * @property from - The from
 * @property fromCarrier - The from_carrier
 * @property fromCountryCode - The from_country_code
 * @property hasTag - The has_tag
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property processingState - The processing_state
 * @property sortBy - The sort_by
 * @property startTime - The start_time
 * @property subaccount - The subaccount
 * @property to - The to
 * @property toCarrier - The to_carrier
 * @property toCountryCode - The to_country_code
 * @property verifiedCaller - The verified_caller
 */
interface CallSummariesListInstancePageOptions {
  abnormalSession?: boolean;
  branded?: boolean;
  callState?: string | string[];
  callType?: string | string[];
  direction?: CallSummariesCallDirection;
  endTime?: string;
  from?: string | string[];
  fromCarrier?: string | string[];
  fromCountryCode?: string | string[];
  hasTag?: boolean;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  processingState?: CallSummariesProcessingStateRequest;
  sortBy?: CallSummariesSortBy;
  startTime?: string;
  subaccount?: string;
  to?: string | string[];
  toCarrier?: string | string[];
  toCountryCode?: string | string[];
  verifiedCaller?: boolean;
}

interface CallSummariesPayload extends CallSummariesResource, Page.TwilioResponsePayload {
}

interface CallSummariesResource {
  account_sid: string;
  attributes: object;
  call_sid: string;
  call_state: CallSummariesCallState;
  call_type: CallSummariesCallType;
  carrier_edge: object;
  client_edge: object;
  connect_duration: number;
  created_time: Date;
  duration: number;
  end_time: Date;
  from: object;
  processing_state: CallSummariesProcessingState;
  properties: object;
  sdk_edge: object;
  sip_edge: object;
  start_time: Date;
  tags: string[];
  to: object;
  trust: object;
  url: string;
}

interface CallSummariesSolution {
}


declare class CallSummariesInstance extends SerializableClass {
  /**
   * Initialize the CallSummariesContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: CallSummariesPayload);

  accountSid: string;
  attributes: any;
  callSid: string;
  callState: CallSummariesCallState;
  callType: CallSummariesCallType;
  carrierEdge: any;
  clientEdge: any;
  connectDuration: number;
  createdTime: Date;
  duration: number;
  endTime: Date;
  from: any;
  processingState: CallSummariesProcessingState;
  properties: any;
  sdkEdge: any;
  sipEdge: any;
  startTime: Date;
  tags: string[];
  to: any;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  trust: any;
  url: string;
}


declare class CallSummariesPage extends Page<V1, CallSummariesPayload, CallSummariesResource, CallSummariesInstance> {
  /**
   * Initialize the CallSummariesPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: CallSummariesSolution);

  /**
   * Build an instance of CallSummariesInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CallSummariesPayload): CallSummariesInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { CallSummariesCallDirection, CallSummariesCallState, CallSummariesCallType, CallSummariesInstance, CallSummariesList, CallSummariesListInstance, CallSummariesListInstanceEachOptions, CallSummariesListInstanceOptions, CallSummariesListInstancePageOptions, CallSummariesPage, CallSummariesPayload, CallSummariesProcessingState, CallSummariesProcessingStateRequest, CallSummariesResource, CallSummariesSolution, CallSummariesSortBy }
