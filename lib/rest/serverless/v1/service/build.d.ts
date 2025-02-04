/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { BuildStatusList } from './build/buildStatus';
import { BuildStatusListInstance } from './build/buildStatus';
import { SerializableClass } from '../../../../interfaces';

type BuildRuntime = 'node8'|'node10'|'node12'|'node14'|'node16';

type BuildStatus = 'building'|'completed'|'failed';

/**
 * Initialize the BuildList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that the Build resource is associated with
 */
declare function BuildList(version: V1, serviceSid: string): BuildListInstance;

interface BuildListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): BuildContext;
  /**
   * create a BuildInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: BuildInstance) => any): Promise<BuildInstance>;
  /**
   * create a BuildInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: BuildListInstanceCreateOptions, callback?: (error: Error | null, item: BuildInstance) => any): Promise<BuildInstance>;
  /**
   * Streams BuildInstance records from the API.
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
  each(callback?: (item: BuildInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams BuildInstance records from the API.
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
  each(opts?: BuildListInstanceEachOptions, callback?: (item: BuildInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a build
   *
   * @param sid - The SID of the Build resource to fetch
   */
  get(sid: string): BuildContext;
  /**
   * Retrieve a single target page of BuildInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: BuildPage) => any): Promise<BuildPage>;
  /**
   * Retrieve a single target page of BuildInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: BuildPage) => any): Promise<BuildPage>;
  /**
   * Lists BuildInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: BuildInstance[]) => any): Promise<BuildInstance[]>;
  /**
   * Lists BuildInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: BuildListInstanceOptions, callback?: (error: Error | null, items: BuildInstance[]) => any): Promise<BuildInstance[]>;
  /**
   * Retrieve a single page of BuildInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: BuildPage) => any): Promise<BuildPage>;
  /**
   * Retrieve a single page of BuildInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: BuildListInstancePageOptions, callback?: (error: Error | null, items: BuildPage) => any): Promise<BuildPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property assetVersions - The list of Asset Version resource SIDs to include in the Build
 * @property dependencies - A list of objects that describe the Dependencies included in the Build
 * @property functionVersions - The list of the Function Version resource SIDs to include in the Build
 * @property runtime - The Runtime version that will be used to run the Build.
 */
interface BuildListInstanceCreateOptions {
  assetVersions?: string | string[];
  dependencies?: string;
  functionVersions?: string | string[];
  runtime?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
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
 */
interface BuildListInstanceEachOptions {
  callback?: (item: BuildInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
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
 */
interface BuildListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface BuildListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface BuildPayload extends BuildResource, Page.TwilioResponsePayload {
}

interface BuildResource {
  account_sid: string;
  asset_versions: object[];
  date_created: Date;
  date_updated: Date;
  dependencies: object[];
  function_versions: object[];
  links: string;
  runtime: BuildRuntime;
  service_sid: string;
  sid: string;
  status: BuildStatus;
  url: string;
}

interface BuildSolution {
  serviceSid?: string;
}


declare class BuildContext {
  /**
   * Initialize the BuildContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Service to fetch the Build resource from
   * @param sid - The SID of the Build resource to fetch
   */
  constructor(version: V1, serviceSid: string, sid: string);

  buildStatus: BuildStatusListInstance;
  /**
   * fetch a BuildInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: BuildInstance) => any): Promise<BuildInstance>;
  /**
   * remove a BuildInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: BuildInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class BuildInstance extends SerializableClass {
  /**
   * Initialize the BuildContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that the Build resource is associated with
   * @param sid - The SID of the Build resource to fetch
   */
  constructor(version: V1, payload: BuildPayload, serviceSid: string, sid: string);

  private _proxy: BuildContext;
  accountSid: string;
  assetVersions: object[];
  /**
   * Access the buildStatus
   */
  buildStatus(): BuildStatusListInstance;
  dateCreated: Date;
  dateUpdated: Date;
  dependencies: object[];
  /**
   * fetch a BuildInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: BuildInstance) => any): Promise<BuildInstance>;
  functionVersions: object[];
  links: string;
  /**
   * remove a BuildInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: BuildInstance) => any): Promise<boolean>;
  runtime: BuildRuntime;
  serviceSid: string;
  sid: string;
  status: BuildStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class BuildPage extends Page<V1, BuildPayload, BuildResource, BuildInstance> {
  /**
   * Initialize the BuildPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: BuildSolution);

  /**
   * Build an instance of BuildInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BuildPayload): BuildInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { BuildContext, BuildInstance, BuildList, BuildListInstance, BuildListInstanceCreateOptions, BuildListInstanceEachOptions, BuildListInstanceOptions, BuildListInstancePageOptions, BuildPage, BuildPayload, BuildResource, BuildRuntime, BuildSolution, BuildStatus }
