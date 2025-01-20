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

        title: string;
        duration: string;
        location: string;
        category: string;
        found: string;
        time: string;
    };
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
        <div className="modal shadow-lg show d-block rounded-2" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-center">Edit Job Details</h5>
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
                                    value={item.jobType}
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
                                <label className="form-label">JobDescription</label>
                                <textarea
                                    className="form-control"
                                    name="jobDescription"
                                    value={item.jobDescription}
                                    onChange={handleChange}
                                    rows={5}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">RequiredSkills</label>

                                <textarea
                                    className="form-control"
                                    name="jobDescription"
                                    value={item.requiredSkills}
                                    onChange={handleChange}
                                    rows={5}
                                />

                            </div>

                            <div className="mb-3">
                                <label className="form-label">Responsibilities</label>

                                <textarea
                                    className="form-control"
                                    name="jobDescription"
                                    value={item.responsibilities}
                                    onChange={handleChange}
                                    rows={4}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">SkillsAndExpertise</label>


                                <textarea
                                    className="form-control"
                                    name="jobDescription"
                                    value={item.skillsAndExpertise}
                                    onChange={handleChange}
                                    rows={4}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Benefits</label>

                                <textarea
                                    className="form-control"
                                    name="jobDescription"
                                    value={item.benefits}
                                    onChange={handleChange}
                                    rows={4}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Jobs Found</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="found"
                                    value={formData.found}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Time</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="time"
                                    value={formData.time}
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
