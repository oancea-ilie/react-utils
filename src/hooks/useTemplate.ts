import {
  useAddTemplateMutation,
  useDeleteTemplateMutation,
  useGetTemplatesQuery,
  useUpdateTemplateMutation,
} from '@store/template/templateApiSlice';
import {
  CreateTemplateDto,
  UpdateTemplateDto,
} from '@typescript/dtos/TemplatesDto';
import { useMemo } from 'react';

function useTemplate() {
  const {
    data: templates = [],
    isLoading: isGetLoading,
    isError: isGetError,
  } = useGetTemplatesQuery();

  const [createTemplate, { isLoading: isAddLoading, isError: isAddError }] =
    useAddTemplateMutation();

  const [
    updateTemplate,
    { isLoading: isUpdateLoading, isError: isUpdateError },
  ] = useUpdateTemplateMutation();

  const [
    deleteTemplate,
    { isLoading: isDeleteLoading, isError: isDeleteError },
  ] = useDeleteTemplateMutation();

  const isLoading = useMemo(
    () => isAddLoading || isUpdateLoading || isDeleteLoading || isGetLoading,
    [isAddLoading, isDeleteLoading, isGetLoading, isUpdateLoading],
  );

  const isError = useMemo(
    () => isAddError || isUpdateError || isDeleteError || isGetError,
    [isAddError, isDeleteError, isGetError, isUpdateError],
  );

  const handleAddTemplate = async () => {
    const createTemplateDto: CreateTemplateDto = {
      background: 'client',
      category: 'test',
      name: 'testing',
      price: 2.2,
      textStyleId: 1,
    };
    await createTemplate(createTemplateDto);
  };

  const handleUpdateTemplate = async () => {
    const updateTemplateDto: UpdateTemplateDto = {
      id: 22,
      background: 'updated',
      category: 'updated',
      name: 'updated',
      price: 10.2,
      textStyleId: 2,
    };
    await updateTemplate(updateTemplateDto);
  };

  const handleDeleteTemplate = async () => {
    await deleteTemplate(22);
  };

  return {
    templates,
    isLoading,
    isError,
    handleAddTemplate,
    handleDeleteTemplate,
    handleUpdateTemplate,
  };
}

export default useTemplate;
