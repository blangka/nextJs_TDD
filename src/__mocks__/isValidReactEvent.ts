import React from "react";

export const isValidReactSyntheticEvent = (target: unknown) => {
    return ['SyntheticBaseEvent', 'SyntheticEvent'].includes((target as React.BaseSyntheticEvent)?.constructor?.name);
}

export const isValidReactEventType = (target: unknown, type: string) => {
    return (target as React.BaseSyntheticEvent)?.type === type;
}
