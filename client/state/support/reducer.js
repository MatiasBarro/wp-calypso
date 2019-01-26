/** @format */

/**
 * Internal dependencies
 */
import { createReducer, combineReducers } from 'state/utils';
import {
	SUPPORT_SESSION_ACTIVATE,
	SUPPORT_SESSION_EXPIRE,
	SUPPORT_USER_ACTIVATE,
	SERIALIZE,
	DESERIALIZE,
} from 'state/action-types';

export const SUPPORT_SESSION_STATE = {
	NONE: 'none',
	ACTIVE: 'active',
	EXPIRED: 'expired',
};

export const supportSession = createReducer( SUPPORT_SESSION_STATE.NONE, {
	[SUPPORT_SESSION_ACTIVATE]( state ) {
		return state === SUPPORT_SESSION_STATE.NONE ? SUPPORT_SESSION_STATE.ACTIVE : state;
	},
	[SUPPORT_SESSION_EXPIRE]( state ) {
		return state === SUPPORT_SESSION_STATE.ACTIVE ? SUPPORT_SESSION_STATE.EXPIRED : state;
	},
} );

export function isSupportUser( state = false, { type } ) {
	switch ( type ) {
		case SUPPORT_USER_ACTIVATE:
			return true;
	}

	return state;
}

export default combineReducers( {
	supportSession,
	isSupportUser,
} );
