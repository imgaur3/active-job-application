import { SET_PAGINATION_PAGE_INDEX } from './Action';
import { PaginationState } from './Types';

export const PaginationInitialState: PaginationState = {};

const PaginationReducer = (
    state = PaginationInitialState,
    action: any, //eslint-disable-line
): PaginationState => {
    const { type, payload } = action;
    switch (type) {
        case SET_PAGINATION_PAGE_INDEX: {
            const { context: pageIndexContext, pageIndex } = payload;
            return {
                ...state,
                [pageIndexContext]: {
                    ...state[pageIndexContext],
                    pageIndex: pageIndex,
                },
            };
        }
        default:
            return state;
    }
};

export default PaginationReducer;
