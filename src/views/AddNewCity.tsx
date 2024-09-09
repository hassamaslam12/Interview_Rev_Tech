import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const AddNewCity = () => {
  const initialValues = {
    name: '',
    status: 'active',
  };

  const onSubmit = async (values: any, { resetForm }: any) => {
    try {
      const response = await axios.post('https://phplaravel-917399-4846074.cloudwaysapps.com/api/city/store', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('City created successfully:', response);
      if (response.status == 200) {
        alert('City created successfully')
      }
      resetForm();
    } catch (error) {
      console.error('Error creating city:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New City</h2>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  City Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter city name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <Field
                  as="select"
                  name="status"
                  id="status"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </Field>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Add City'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddNewCity;
