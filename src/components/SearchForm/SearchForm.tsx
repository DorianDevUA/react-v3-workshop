interface SearchFormProps {
  onSubmit: (query: string) => void;
}

export default function SearchForm(props: SearchFormProps) {
  const { onSubmit } = props;

  function handleSearch(formData: FormData) {
    const searchQuery = formData.get('query') as string;

    if (searchQuery === '') {
      alert('Please enter search query!');
      return;
    }

    onSubmit(searchQuery);
  }

  return (
    <form action={handleSearch}>
      <input type="search" name="query" />
      <button type="submit">Submit</button>
    </form>
  );
}
