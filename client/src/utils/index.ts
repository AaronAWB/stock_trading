import AuthMethods from "./authMethods";
import CompanyMethods from "./companyMethods";
import UserContext from "./userContext";
import { 
    getFormattedFirstWord, 
    formatDate, 
    formatDollarAmount, 
    removeCommas,
    roundDown,
    getUserId 
} from "./utilityFunctions";
import type { 
    StockData, 
    QuoteData, 
    FinancialData 
} from "./types";

export { 
    AuthMethods, 
    CompanyMethods, 
    getFormattedFirstWord,
    formatDate,
    formatDollarAmount,
    removeCommas,
    getUserId,
    roundDown,
    UserContext
};

export type {
    StockData,
    QuoteData,
    FinancialData,
}