import React, { useState } from "react";

const EditModal = ({
    item,
    isOpen,
    onClose,
    initialData,
    onSave,
}: {
    item: any,
    isOpen: boolean;
    onClose: () => void;
    initialData: {
        item:any,
        title: string;
        duration: string;
        date: string;
        company: string;
        location: string;
        category: string[];
        experience: string;
        salary: number;
        salary_duration: string;
        tags: string[];
        english_fluency: string;
        overview: string;
        description: string;
        responsibilities: string;
        benefits: string;
        tenderType: string;
        created_at: string;
        found: string;
        time: string;
    }

    onSave: any;
}) => {
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal fade show d-block rounded-3 p-4 ms-4 mt-10" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content shadow-lg border-0 rounded-3">
                    <div className="modal-header bg-success text-white">
                        <h5 className="modal-title text-center">Edit Tender Details</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body shadow-lg">
                        <form>
                            <div className="mb-3">
                                <label className="form-label fw-normal">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    value={item.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Duration</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="duration"
                                    value={item.duration}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Location</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="location"
                                    value={item.location}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="category"
                                    value={item.category}
                                    onChange={handleChange}
                                />
                            </div>
                           

                            
                           
                            
                            <div className="mb-3">
                                <label className="form-label">Benefits</label>
                                <textarea
                                    className="form-control"
                                    name="benefits"
                                    value={item.benefits}
                                    onChange={handleChange}
                                    rows={4}
                                />
                            </div>



                          

                            <div className="mb-3">
                                <label className="form-label">Company</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="company"
                                    value={item.company}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Experience</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="experience"
                                    value={item.experience}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Salary</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="salary"
                                    value={item.salary}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Salary Duration</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="salary_duration"
                                    value={item.salary_duration}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Tags</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="tags"
                                    value={item.tags}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">English Fluency</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="english_fluency"
                                    value={item.english_fluency}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Overview</label>
                                <textarea
                                    className="form-control"
                                    name="overview"
                                    value={item.overview}
                                    onChange={handleChange}
                                    rows={3}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Created At</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="created_at"
                                    value={item.created_at}
                                    onChange={handleChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer shadow-lg">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-success" onClick={handleSave}>
                            Updated
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EditModal;
