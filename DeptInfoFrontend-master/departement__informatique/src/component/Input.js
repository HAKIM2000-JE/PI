import React from "react";
import { Input, FormFeedback } from "reactstrap";
const input = ({ field, form: { touched, errors }, ...props }) => {
    return (
        <div>
            <Input
                invalid={!!(touched[field.name] && errors[field.name])}
                {...field}
                {...props}
                value={field.value || ""}
            />
            {touched[field.name] && errors[field.name] && (
                <FormFeedback>{errors[field.name]}</FormFeedback>
            )}
        </div>
    );
};
export default input;
