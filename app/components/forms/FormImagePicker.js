import React from 'react';
import { useFormikContext } from "formik";

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

const FormImagePicker = ({ name }) => {

	const { setFieldValue, errors, touched, values } = useFormikContext();

	const imageUris = values[name]

	const handleAdd = (uri) => {
		setFieldValue(name, [...imageUris, uri])
	}

	const handleRemove = (uri) => {
	const newUris =	imageUris.filter( item => uri !== item )
	setFieldValue(name, [...newUris]);
	}


	return (
		<>
			<ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default FormImagePicker;