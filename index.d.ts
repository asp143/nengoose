declare namespace nengoose {
    class Db {
        constructor(database: string);

        /**
         * Initializes a Database schema
         * @param schema 
         */
        Schema(schema: any): Model;
    
        /**
         * Returns the string location of the database
         * @returns string
         */
        getDatabaseLocation(): string;
    }

    class Model {
        constructor(database: string, schema: any);
    
        /**
     * Appends a new document to the nedb instance
     * @param {*} newData
     * @returns Promise<any>
     */
        Create(newData): Promise<any>;
        

        /**
         * 
         * @param id 
         */
        FindById(id: string): Promise<any>;


        /**
         * 
         * @param query 
         * @param options 
         */
        FindAll(query, options?): Promise<any>;

        /**
         * 
         * @param IdList 
         */
        FindByIdList(IdList: Array<any>): Promise<any>;
        
        /**
         * @param id
         * @param options
         */
        DeleteById(id, options): Promise<any>;
        
        /**
         * Updates a document to the nedb instance
         * @param query 
         * @param newData 
         * @param options 
         */
        Update(query, newData, options): Promise<any>;
        
        /**
         * 
         * @param id 
         * @param newData 
         * @param options 
         */
        UpdateById(id, newData, options): Promise<any>;
    }
}

declare module 'nengoose' {
    export = nengoose;
}
