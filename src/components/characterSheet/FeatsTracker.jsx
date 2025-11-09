import React, { useState, useEffect } from 'react';
import { Plus, X, ChevronDown, ChevronUp, Edit2, Search, Check } from 'lucide-react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase/config';

export default function FeatsTracker({ feats, setFeats }) {
  const [expandedFeat, setExpandedFeat] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [allFeats, setAllFeats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFeats, setSelectedFeats] = useState(new Set(feats.map(f => f.id)));

  // Load all feats from Firestore when editing
  useEffect(() => {
    if (isEditing) {
      loadFeats();
    }
  }, [isEditing]);

  const loadFeats = async () => {
    setLoading(true);
    try {
      const featsCollection = collection(db, 'feats');
      const featsQuery = query(featsCollection);
      const querySnapshot = await getDocs(featsQuery);
      
      const featsData = [];
      querySnapshot.forEach((doc) => {
        featsData.push({ id: doc.id, ...doc.data() });
      });
      
      // Sort alphabetically
      featsData.sort((a, b) => a.name.localeCompare(b.name));
      setAllFeats(featsData);
    } catch (error) {
      console.error('Error loading feats:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFeat = (feat) => {
    const newSelected = new Set(selectedFeats);
    if (newSelected.has(feat.id)) {
      newSelected.delete(feat.id);
    } else {
      newSelected.add(feat.id);
    }
    setSelectedFeats(newSelected);
  };

  const saveFeats = () => {
    const newFeats = allFeats.filter(feat => selectedFeats.has(feat.id));
    setFeats(newFeats);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setSelectedFeats(new Set(feats.map(f => f.id)));
    setIsEditing(false);
    setSearchQuery('');
  };

  const filteredFeats = allFeats.filter(feat =>
    feat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    feat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (feat.prerequisite && feat.prerequisite.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xl font-bold text-blue-400">Feats</h4>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2 transition-colors"
        >
          <Edit2 size={18} />
          {isEditing ? 'Cancel' : 'Edit Feats'}
        </button>
      </div>

      {/* Normal View */}
      {!isEditing && (
        <div className="space-y-2">
          {feats.length === 0 ? (
            <p className="text-slate-400 text-center py-4">No feats selected</p>
          ) : (
            feats.map((feat) => (
              <div
                key={feat.id}
                className="bg-slate-800 rounded border border-slate-600 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFeat(expandedFeat === feat.id ? null : feat.id)}
                  className="w-full flex items-center justify-between p-4 hover:bg-slate-700 transition-colors"
                >
                  <div className="flex-1 text-left">
                    <h5 className="text-lg font-semibold text-blue-300">{feat.name}</h5>
                    {feat.prerequisite && (
                      <p className="text-xs text-slate-400 mt-1">
                        Prerequisite: {feat.prerequisite}
                      </p>
                    )}
                  </div>
                  {expandedFeat === feat.id ? (
                    <ChevronUp className="text-slate-400" size={20} />
                  ) : (
                    <ChevronDown className="text-slate-400" size={20} />
                  )}
                </button>

                {/* Expanded Content */}
                {expandedFeat === feat.id && (
                  <div className="px-4 pb-4 space-y-3">
                    <div className="pt-2 border-t border-slate-700">
                      <p className="text-slate-300 text-sm mb-3">{feat.description}</p>
                      
                      {feat.benefits && feat.benefits.length > 0 && (
                        <ul className="space-y-2">
                          {feat.benefits.map((benefit, index) => (
                            <li key={index} className="flex gap-2 text-sm text-slate-300">
                              <span className="text-blue-400 flex-shrink-0">•</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {feat.source && (
                        <div className="mt-3 pt-3 border-t border-slate-700">
                          <span className="text-xs text-slate-500">Source: {feat.source}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {/* Edit Mode */}
      {isEditing && (
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search feats by name, description, or prerequisite..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-8 text-slate-400">
              <div className="animate-spin mx-auto mb-2 w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              <p>Loading feats...</p>
            </div>
          )}

          {/* Feats List */}
          {!loading && (
            <>
              <div className="max-h-96 overflow-y-auto space-y-2">
                {filteredFeats.length === 0 ? (
                  <p className="text-slate-400 text-center py-4">
                    {searchQuery ? 'No feats match your search' : 'No feats available'}
                  </p>
                ) : (
                  filteredFeats.map((feat) => {
                    const isSelected = selectedFeats.has(feat.id);
                    return (
                      <div
                        key={feat.id}
                        onClick={() => toggleFeat(feat)}
                        className={`p-4 rounded border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-blue-900 border-blue-600'
                            : 'bg-slate-800 border-slate-600 hover:border-slate-500'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {/* Checkbox */}
                          <div className={`w-5 h-5 flex-shrink-0 rounded border-2 flex items-center justify-center mt-0.5 ${
                            isSelected
                              ? 'bg-blue-600 border-blue-600'
                              : 'bg-slate-700 border-slate-500'
                          }`}>
                            {isSelected && <Check size={14} className="text-white" />}
                          </div>

                          {/* Feat Info */}
                          <div className="flex-1">
                            <h5 className={`font-semibold ${isSelected ? 'text-blue-200' : 'text-blue-300'}`}>
                              {feat.name}
                            </h5>
                            {feat.prerequisite && (
                              <p className="text-xs text-slate-400 mt-1">
                                Prerequisite: {feat.prerequisite}
                              </p>
                            )}
                            <p className="text-sm text-slate-300 mt-2">
                              {feat.description}
                            </p>
                            {feat.benefits && feat.benefits.length > 0 && (
                              <ul className="space-y-2">
                                {feat.benefits.map((benefit, index) => (
                                  <li key={index} className="flex gap-2 text-sm text-slate-300">
                                    <span className="text-blue-400 flex-shrink-0">•</span>
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {feat.source && (
                              <span className="inline-block mt-2 text-xs px-2 py-1 bg-slate-700 text-slate-400 rounded">
                                {feat.source}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Summary */}
              <div className="flex items-center justify-between p-3 bg-slate-800 rounded">
                <span className="text-slate-300">
                  {selectedFeats.size} feat{selectedFeats.size !== 1 ? 's' : ''} selected
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={cancelEdit}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveFeats}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2 transition-colors"
                  >
                    <Check size={18} />
                    Save Feats
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}