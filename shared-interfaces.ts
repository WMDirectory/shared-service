/** Common interfaces */
/** This will contain all DB related interfaces */

export interface Contact extends Relation {
    firstname: string,
    lastname: string,
    address: string,
    phones: string[],
    emails: string[],
    /** Relates to File Id */
    profilepic: Relation
}

/** Common relational value */
export interface Relation {
    _id: string,
    name: string
}

export interface ColumnSetting {
    /** Type will allow for some level of preprocessing before displaying (particularly Array) */
    type: string,
    /** Name to display */
    name: string
}

export interface ListSetting {
    /**  */
    route: string,
    /** Name to be displayed as list header */
    name: string,
    columns: {
        /** Key has to match the key inside the object of the data. Ie: user: {email: string, password: string}, key is 'email' and 'password' */
        [key: string]: ColumnSetting
    }
}

/** This is the UI version of the @interface FileDB from server/models/interface */
export interface FileUI {
    _id: string
    filename: string
    /** This is FileDB.url */
    path: string
    cts: string
}

export interface LookupDB {
    name: string
    code: string
    attachments?: string[] | Relation[]
    /**
     * 0: testing,
     * 1: states,
     * 2: categories,
     * 3: status,
     */
    type: number
    cts: string
}

export interface LookupPayload {
    name: string,
    code: string,
    attachments: string[],
    /**
     * 0: testing,
     * 1: states,
     * 2: categories,
     * 3: status,
     */
    type: number
}

/**
 * Lookup Relation
 * This will be how lookups are stored in another fields
 */
export interface LookupRel {
    _id: string,
    name: string,
    code: string
}

/**
 * Other relations aside from Lookup Relation
 */
export interface RegularRel {
    _id: string,
    name: string
}

export interface PostingDB {
    start: string
    expiry?: string
    title: string
    description?: string
    categories: LookupDB[]
    states: LookupDB[]
    area: string
    products?: RegularRel[]
    contactdetails?: ContactDetail[]
    attachments?: FileDB[]
    logo: FileDB
    bgimg: FileDB
    company: ContactDB
    contact: ContactDB
    cts: string
}

export interface PostingPayload {
    start: string
    expiry?: string
    title: string
    description?: string
    categoryids: string[]
    stateids: string[]
    area: string
    productids?: string[]
    contactdetails?: ContactDetail[]
    attachmentIds?: string[]
    companyid: string
    contactid: string
}

export interface FileDB {
    etag: string,
    url: string,
    mimetype: string,
    size: number,
    filename: string,
    cts: string
}

export interface ContactDetail {
    text: string,
    type: number
}

export interface ContactDB {
    /** TODO: Add _id property */
    firstname: string,
    lastname?: string,
    type: number,
    address?: string,
    phones?: string[],
    emails?: string[],
    contactdetails?: ContactDetail[]
    /** Stores the fileId for the profile pic */
    profilepic?: FileDB,
    /** Stores array of contactIds with name */
    contacts?: ContactDB[],
    cts: string
}

export interface ContactPayload {
    firstname: string,
    lastname?: string,
    /**
     * Type will determine which contact data is this
     * type: 0 - Testing
     * type: 1 - User
     * type: 2 - Customer/Contact
     * type: 3 - Company
     */
    type: number,
    address?: string,
    phones?: string[],
    emails?: string[],
    contactdetails?: ContactDetail[]
    /** File ID */
    profilepic?: string,
    contactids?: string[]
}

