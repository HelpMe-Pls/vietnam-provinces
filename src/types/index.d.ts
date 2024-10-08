// index.d.ts

export interface IProvinces {
  code: string;
  name: string;
  slug: string;
  unit: string;
}
export interface IDistricts {
  code: string;
  name: string;
  slug: string;
  unit: string;
  provinceCode: string;
  provinceName: string;
  fullName: string;
}
export interface IWards {
  code: string;
  name: string;
  slug: string;
  unit: string;
  districtCode: string;
  districtName: string;
  provinceCode: string;
  provinceName: string;
  fullName: string;
}
declare module "sst-provinces" {
  export function getProvinces(): IProvinces[];
  export function getDistricts(): IDistricts[];
  export function getWards(): IWards[];
  export function getProvinceByCode(code: string): IProvinces;
  export function getDistrictByCode(code: string): IDistricts;
  export function getWardByCode(code: string): IWards;
  export function getDistrictsByProvinceCode(
    provinceCode: string
  ): IDistricts[];
  export function getWardsByDistrictCode(districtCode: string): IWards[];

  /**
   * Search and paginate through a list of Districts.
   *
   * @param {Object} options - Options object.
   * @param {string} [options.searchText] - The text to search for within ward names.
   * @param {number} [options.page] - The page number to retrieve, default value is 1.
   * @param {number} [options.pageSize] - The number of wards per page, default value is 20.
   * @returns {Promise<{data: Array<Object>, remainingRecords: number}>} An object containing data for the current page and the count of remaining records.
   * @throws {Error} Throws an error if any occurs during the process.
   */
  export function searchAndPaginateDistricts({
    searchText,
    page,
    pageSize,
  }: {
    searchText?: string;
    page?: number;
    pageSize?: number;
  }): Promise<{ data: Array<Object>; remainingRecords: number }>;

  /**
   * Search and paginate through a list of Provinces.
   *
   * @param {Object} options - Options object.
   * @param {string} [options.searchText] - The text to search for within ward names.
   * @param {number} [options.page] - The page number to retrieve, default value is 1.
   * @param {number} [options.pageSize] - The number of wards per page, default value is 20.
   * @returns {Promise<{data: Array<Object>, remainingRecords: number}>} An object containing data for the current page and the count of remaining records.
   * @throws {Error} Throws an error if any occurs during the process.
   */
  export function searchAndPaginateProvinces({
    searchText,
    page,
    pageSize,
  }: {
    searchText?: string;
    page?: number;
    pageSize?: number;
  }): Promise<{ data: Array<Object>; remainingRecords: number }>;

  /**
   * Search and paginate through a list of wards.
   *
   * @param {Object} options - Options object.
   * @param {string} [options.searchText] - The text to search for within ward names.
   * @param {number} [options.page] - The page number to retrieve, default value is 1.
   * @param {number} [options.pageSize] - The number of wards per page, default value is 20.
   * @returns {Promise<{data: Array<Object>, remainingRecords: number}>} An object containing data for the current page and the count of remaining records.
   * @throws {Error} Throws an error if any occurs during the process.
   */
  export function searchAndPaginateWards({
    searchText,
    page,
    pageSize,
  }: {
    searchText?: string;
    page?: number;
    pageSize?: number;
  }): Promise<{ data: Array<Object>; remainingRecords: number }>;
}
