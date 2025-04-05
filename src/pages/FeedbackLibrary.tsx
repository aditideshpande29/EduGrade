import  { useState } from 'react';
import { Edit, FileText, Plus, Search, Trash } from 'lucide-react';

const FeedbackLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const feedbackTemplates = [
    { id: 1, category: 'grammar', title: 'Sentence Structure', content: 'Your sentence structure needs improvement. Consider varying sentence length and structure to improve readability.' },
    { id: 2, category: 'content', title: 'Evidence Use', content: 'Your arguments would be stronger with more specific evidence. Try incorporating more concrete examples to support your points.' },
    { id: 3, category: 'grammar', title: 'Punctuation', content: 'Pay attention to comma usage. Review the rules for comma placement, especially with introductory phrases and clauses.' },
    { id: 4, category: 'organization', title: 'Paragraph Structure', content: 'Your paragraphs should each focus on a single main idea. Start with a topic sentence and ensure all sentences in the paragraph support that topic.' },
    { id: 5, category: 'content', title: 'Critical Thinking', content: 'Your analysis shows good critical thinking. Continue developing this by considering alternative perspectives and addressing potential counterarguments.' },
    { id: 6, category: 'citations', title: 'Citation Format', content: 'Review your citation format. Make sure all sources are properly cited according to the required style guide (MLA, APA, etc.).' },
  ];
  
  const categories = [
    { id: 'all', label: 'All Templates' },
    { id: 'grammar', label: 'Grammar & Style' },
    { id: 'content', label: 'Content & Analysis' },
    { id: 'organization', label: 'Organization' },
    { id: 'citations', label: 'Citations & References' },
  ];
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'grammar':
        return 'bg-pastel-sky text-slate-700';
      case 'content':
        return 'bg-pastel-lavender text-slate-700';
      case 'organization':
        return 'bg-pastel-mint text-slate-700';
      case 'citations':
        return 'bg-pastel-peach text-slate-700';
      default:
        return 'bg-pastel-lemon text-slate-700';
    }
  };
  
  const filteredTemplates = feedbackTemplates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          template.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || template.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold">Feedback Library</h1>
        <p className="text-slate-600">Manage and customize feedback templates for consistent student guidance.</p>
      </div>
      
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search feedback templates..."
            className="w-full rounded-md border border-slate-200 bg-white py-2 pl-10 pr-4 focus:border-pastel-lavender focus:outline-none focus:ring-1 focus:ring-pastel-lavender sm:w-80"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <button className="btn btn-primary inline-flex items-center">
          <Plus size={16} className="mr-2" />
          New Template
        </button>
      </div>
      
      <div className="mb-6 border-b border-slate-200">
        <nav className="-mb-px flex space-x-6 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`whitespace-nowrap border-b-2 py-4 text-sm font-medium ${
                activeCategory === category.id
                  ? 'border-pastel-lilac text-pastel-lilac'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </nav>
      </div>
      
      {filteredTemplates.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg bg-white py-12 text-center">
          <FileText className="mb-4 h-12 w-12 text-pastel-lavender" />
          <h3 className="mb-2 text-lg font-medium">No templates found</h3>
          <p className="mb-4 max-w-md text-slate-500">
            {searchTerm 
              ? `No templates matching "${searchTerm}" in the current category.` 
              : 'No templates available in this category.'}
          </p>
          <button className="btn btn-primary inline-flex items-center">
            <Plus size={16} className="mr-2" />
            Create New Template
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="card">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-medium">{template.title}</h3>
                <div className="flex items-center gap-2">
                  <button className="rounded-full p-1 text-slate-500 hover:bg-pastel-sky/20 hover:text-slate-700">
                    <Edit size={16} />
                  </button>
                  <button className="rounded-full p-1 text-slate-500 hover:bg-pastel-pink/20 hover:text-pastel-blush">
                    <Trash size={16} />
                  </button>
                </div>
              </div>
              <p className="mb-3 text-sm text-slate-600">{template.content}</p>
              <div className="flex items-center justify-between">
                <span className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${getCategoryColor(template.category)}`}>
                  {template.category}
                </span>
                <button className="text-sm font-medium text-pastel-lilac hover:underline">
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackLibrary;
 