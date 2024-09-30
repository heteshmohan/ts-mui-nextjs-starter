import * as React from 'react';
import type * as types from 'types';
import { Button } from '../../atoms/Button';
import MuiBox from '@mui/material/Box';
import MuiGrid from '@mui/material/Grid';
import MuiStack from '@mui/material/Stack';
import MuiTypography from '@mui/material/Typography';
import MuiTextField from '@mui/material/TextField';

export type FormField = {
    type: 'TextField' | 'TextArea';
    name: string;
    label: string;
    required?: boolean;
    inputType?: string; // e.g., 'text', 'email'
    rows?: number; // for TextArea
};

export type Props = {
    title: string;
    subtitle: string;
    fields: FormField[];
    actions: {
        type: 'Button';
        label: string;
        url: string; // This could be used for form submission
    }[];
} & types.StackbitFieldPath;

export const FormSection: React.FC<Props> = (props) => {
    const { title, subtitle, fields, actions, 'data-sb-field-path': fieldPath } = props;

    // State to handle form data
    const [formData, setFormData] = React.useState<{ [key: string]: string }>({});
    const [submitted, setSubmitted] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({}); // Reset form after submission
    };

    return (
        <MuiBox sx={{ py: { xs: 6, sm: 10 } }} data-sb-field-path={fieldPath}>
            <MuiGrid container spacing={4}>
                <MuiGrid item xs={12}>
                    <MuiTypography component="h2" variant="h4" color="text.primary" data-sb-field-path=".title">
                        {title}
                    </MuiTypography>
                    <MuiTypography component="p" variant="h6" color="text.primary" sx={{ mt: 1 }} data-sb-field-path=".subtitle">
                        {subtitle}
                    </MuiTypography>
                </MuiGrid>
                <MuiGrid item xs={12}>
                    <form onSubmit={handleSubmit}>
                        {fields.map((field, index) => {
                            if (field.type === 'TextField') {
                                return (
                                    <MuiTextField
                                        key={index}
                                        name={field.name}
                                        label={field.label}
                                        required={field.required}
                                        fullWidth
                                        type={field.inputType || 'text'}
                                        onChange={handleChange}
                                        sx={{ mb: 2 }}
                                    />
                                );
                            }
                            if (field.type === 'TextArea') {
                                return (
                                    <MuiTextField
                                        key={index}
                                        name={field.name}
                                        label={field.label}
                                        required={field.required}
                                        fullWidth
                                        multiline
                                        rows={field.rows || 4}
                                        onChange={handleChange}
                                        sx={{ mb: 2 }}
                                    />
                                );
                            }
                            return null;
                        })}
                        {submitted && (
                            <MuiTypography variant="body1" color="success.main" sx={{ mb: 2 }}>
                                Thank you for your message! We will get back to you shortly.
                            </MuiTypography>
                        )}
                        <MuiStack
                            direction="row"
                            alignItems="center"
                            justifyContent="flex-start"
                            flexWrap="wrap"
                            data-sb-field-path=".actions"
                        >
                            {actions.map((action, index) => (
                                <Button
                                    key={index}
                                    {...action}
                                    sx={{
                                        mr: 2,
                                        mb: 2
                                    }}
                                    data-sb-field-path={`.${index}`}
                                />
                            ))}
                        </MuiStack>
                    </form>
                </MuiGrid>
            </MuiGrid>
        </MuiBox>
    );
};
