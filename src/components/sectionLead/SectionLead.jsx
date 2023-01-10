import React from "react";
import './_sectionLead.scss';
import { Link } from "react-router-dom";
import { LeadItem } from "./LeadItem";
import { useSelector } from "react-redux";
import dataTable from "./dataTable";
import { useState } from "react";

const SectionLead = () => {
    const [tables] = useState(dataTable);

    const leads = useSelector(state => state.leads.leads);

    return (
        <section className="section-lead">
            <div className="container">
                <div className="section-lead__title">
                    <h1 className="title">Lead Table</h1>
                    <div className="title-image">
                        <Link to="/project_react_redux_routing/CreateLead"><img src="./img/plus.png" alt="table-lead_img" /></Link>
                    </div>
                </div>
                <div className="scroll-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="subtitle">Name</th>
                                <th className="subtitle">Source</th>
                                <th className="subtitle">Budget</th>
                                <th className="subtitle">Next task</th>
                                <th className="subtitle">Contacts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tables.map((table) => (
                                <tr key={table.id}>
                                    <td className="text">{table.name}</td>
                                    <td className="text">{table.source}</td>
                                    <td className="text">{table.budget}</td>
                                    <td className="text">{table.nextTask}</td>
                                    <td className="text">{table.contact}</td>
                                </tr>

                            ))}
                            {leads.map((lead) => (
                                <tr key={lead.id}>
                                    <LeadItem {...lead} />
                                </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export { SectionLead };

